import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormSection } from 'redux-form'
import { Form, Accordion, Header, Segment, Grid, Icon } from 'semantic-ui-react'

import { VerticalSpacer } from 'shared/components/Spacers'
import { ButtonLink } from 'shared/components/StyledComponents'
import { Select, LabeledSlider, AlignedCheckboxGroup } from 'shared/components/form/Inputs'
import { configuredField, configuredFields } from 'shared/components/form/ReduxFormWrapper'
import { VEP_GROUP_OTHER } from 'shared/utils/constants'

import FrequencyFilter from './FrequencyFilter'
import {
  THIS_CALLSET_FREQUENCY,
  FREQUENCIES,
  PATHOGENICITY_FIELDS,
  PATHOGENICITY_FILTER_OPTIONS,
  STAFF_PATHOGENICITY_FIELDS,
  STAFF_PATHOGENICITY_FILTER_OPTIONS,
  ANY_PATHOGENICITY_FILTER,
  ANNOTATION_GROUPS,
  ANNOTATION_FILTER_OPTIONS,
  ALL_ANNOTATION_FILTER_DETAILS,
  QUALITY_FILTER_FIELDS,
  QUALITY_FILTER_OPTIONS,
  ALL_QUALITY_FILTER,
  LOCATION_FIELDS,
  CODING_IMPACT_GROUPS,
  HIGH_IMPACT_GROUPS,
  MODERATE_IMPACT_GROUPS,
} from './constants'

const ToggleHeader = styled(Header).attrs({ size: 'huge', block: true })`
  .dropdown.icon {
    vertical-align: middle !important;
  }

  .grid {
    display: inline-block !important;
    width: calc(100% - 2em);
  }
`

const ToggleHeaderFieldColumn = styled(Grid.Column)`
  font-size: 0.75em;
      
  .fields {
    margin: 0 !important;
    
    &.inline .field:last-child {
      padding-right: 0 !important;
    }
  }
  
  .inline.field  {
    padding-right: 0 !important;
  }
      
  .dropdown {
    &.fluid {
      width: 100% !important;
    }
    
    .icon {
      margin: -0.75em !important;
      transform: rotate(90deg) !important;
    }
  }
      
  .rangeslider {
    margin: 1.2em;
    font-weight: 300;
    font-size: .9em;
    
    .rangeslider__labels {
      font-size: .5em;
    }
  }
`

const ExpandCollapseCategoryContainer = styled.span`
  float: right;
  position: relative;
  top: -1em;
`

const JsonSelectPropsWithAll = (options, all) => ({
  component: Select,
  format: val => JSON.stringify(val) || JSON.stringify(all.value),
  parse: val => JSON.parse(val),
  options: options.map(({ value, ...option }) => ({ ...option, value: JSON.stringify(value) })),
})

const pathogenicityPanel = isStaff => ({
  name: 'pathogenicity',
  headerProps: { title: 'Pathogenicity', inputProps: JsonSelectPropsWithAll(isStaff ? STAFF_PATHOGENICITY_FILTER_OPTIONS : PATHOGENICITY_FILTER_OPTIONS, ANY_PATHOGENICITY_FILTER) },
  fields: isStaff ? STAFF_PATHOGENICITY_FIELDS : PATHOGENICITY_FIELDS,
  fieldProps: { control: AlignedCheckboxGroup, format: val => val || [] },
  helpText: 'Filter by reported pathogenicity. Note this filter will override any annotations filter (i.e variants will be returned if they have either the specified pathogenicity OR transcript consequence)',
})

export const STAFF_PATHOGENICITY_PANEL = pathogenicityPanel(true)
export const PATHOGENICITY_PANEL = pathogenicityPanel(false)

const ANNOTATION_GROUP_INDEX_MAP = ANNOTATION_GROUPS.reduce((acc, { name }, i) => ({ ...acc, [name]: i }), {})

export const ANNOTATION_PANEL = {
  name: 'annotations',
  headerProps: { title: 'Annotations', inputProps: JsonSelectPropsWithAll(ANNOTATION_FILTER_OPTIONS, ALL_ANNOTATION_FILTER_DETAILS) },
  fields: ANNOTATION_GROUPS,
  fieldProps: { control: AlignedCheckboxGroup, format: val => val || [] },
  fieldLayout: fieldComponents => [
    ...[HIGH_IMPACT_GROUPS, MODERATE_IMPACT_GROUPS, CODING_IMPACT_GROUPS].map(groups =>
      <Form.Field key={groups[0]} width={3}>
        {groups.map(group =>
          <div key={group}>
            {fieldComponents[ANNOTATION_GROUP_INDEX_MAP[group]]}
            <VerticalSpacer height={20} />
          </div>,
        )}
      </Form.Field>,
    ),
    <Form.Field key={VEP_GROUP_OTHER} width={4}>
      {fieldComponents[ANNOTATION_GROUP_INDEX_MAP[VEP_GROUP_OTHER]]}
    </Form.Field>,
  ],
}

export const FREQUENCY_PANEL = {
  name: 'freqs',
  headerProps: {
    title: 'Frequency',
    inputSize: 6,
    inputProps: {
      component: FrequencyFilter,
      format: (values) => {
        if (!values) {
          return {}
        }
        const { callset, ...freqValues } = values
        return Object.values(freqValues).reduce((acc, value) => ({
          af: value.af === acc.af ? value.af : null,
          ac: value.ac === acc.ac ? value.ac : null,
          hh: value.hh === acc.hh ? value.hh : null,
        }), Object.values(freqValues)[0])
      },
      parse: value => FREQUENCIES.reduce((acc, { name }) => (name === THIS_CALLSET_FREQUENCY ? acc : { ...acc, [name]: value }), {}),
      homHemi: true,
      inlineAF: true,
    },
  },
  fields: FREQUENCIES,
  fieldProps: { control: FrequencyFilter, format: val => val || {} },
  helpText: 'Filter by allele frequency (popmax AF where available) or by allele count (AC). In applicable populations, also filter by homozygous/hemizygous count (H/H).',
}

export const LOCATION_PANEL = {
  name: 'locus',
  headerProps: { title: 'Location' },
  fields: LOCATION_FIELDS,
  helpText: 'Filter by variant location. Entries can be either gene symbols (e.g. CFTR) or intervals in the form <chrom>:<start>-<end> (e.g. 4:6935002-87141054). Variant entries can be either rsIDs (e.g. rs61753695) or variants in the form <chrom>-<pos>-<ref>-<alt> (e.g. 4-88047328-C-T). Entries can be separated by commas or whitespace.',
}

export const QUALITY_PANEL = {
  name: 'qualityFilter',
  headerProps: { title: 'Call Quality', inputProps: JsonSelectPropsWithAll(QUALITY_FILTER_OPTIONS, ALL_QUALITY_FILTER) },
  fields: QUALITY_FILTER_FIELDS,
  fieldProps: { control: LabeledSlider, format: val => val || null },
}

const HeaderContent = ({ name, title, inputSize, inputProps }) =>
  <Grid>
    <Grid.Row>
      <Grid.Column width={9} verticalAlign="middle">{title}</Grid.Column>
      {inputProps &&
        <ToggleHeaderFieldColumn width={inputSize || 3} floated="right" textAlign="right" onClick={e => e.stopPropagation()}>
          {configuredField({ ...inputProps, name })}
        </ToggleHeaderFieldColumn>
      }
    </Grid.Row>
  </Grid>

HeaderContent.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  inputSize: PropTypes.number,
  inputProps: PropTypes.object,
}

const PanelContent = ({ name, fields, fieldProps, helpText, fieldLayout }) => {
  const fieldComponents = fields && configuredFields({ fields: fields.map(field => ({ ...(fieldProps || {}), ...field })) })
  return (
    <FormSection name={name}>
      {helpText && <i>{helpText} <VerticalSpacer height={20} /></i>}
      <Form.Group widths="equal">
        <Form.Field width={2} />
        {fieldLayout ? fieldLayout(fieldComponents) : fieldComponents}
        <Form.Field width={2} />
      </Form.Group>
    </FormSection>
  )
}

PanelContent.propTypes = {
  fields: PropTypes.array,
  name: PropTypes.string.isRequired,
  fieldProps: PropTypes.object,
  helpText: PropTypes.node,
  fieldLayout: PropTypes.func,
}

const panelDetails = totalPanels => ({ name, headerProps, ...panelContentProps }, i) => ({
  key: name,
  title: {
    key: `${name}-title`,
    as: ToggleHeader,
    attached: i === 0 ? 'top' : true,
    content: <HeaderContent name={name} {...headerProps} />,
  },
  content: {
    key: name,
    as: Segment,
    attached: i === totalPanels - 1 ? 'bottom' : true,
    padded: true,
    textAlign: 'center',
    content: <PanelContent name={name} {...panelContentProps} />,
  },
})


class VariantSearchFormPanels extends React.PureComponent {
  state = { activeIndex: [] }

  expandAll = (e) => {
    e.preventDefault()
    this.setState({ activeIndex: [...this.props.panels.keys()] })
  }

  collapseAll = (e) => {
    e.preventDefault()
    this.setState({ activeIndex: [] })
  }

  handleTitleClick = (e, { index }) => {
    const { activeIndex } = this.state
    const newIndex = activeIndex.indexOf(index) === -1 ? [...activeIndex, index] : activeIndex.filter(item => item !== index)

    this.setState({ activeIndex: newIndex })
  }


  render() {
    return (
      <div>
        <ExpandCollapseCategoryContainer>
          <ButtonLink onClick={this.expandAll}>Expand All &nbsp;<Icon name="plus" /></ButtonLink>
          <b>| &nbsp;&nbsp;</b>
          <ButtonLink onClick={this.collapseAll}>Collapse All &nbsp;<Icon name="minus" /></ButtonLink>
        </ExpandCollapseCategoryContainer>
        <VerticalSpacer height={25} />
        <FormSection name="search">
          <Accordion
            fluid
            panels={this.props.panels.map(panelDetails(this.props.panels.length))}
            exclusive={false}
            activeIndex={this.state.activeIndex}
            onTitleClick={this.handleTitleClick}
          />
        </FormSection>
      </div>
    )
  }
}

VariantSearchFormPanels.propTypes = {
  panels: PropTypes.array,
}

export default VariantSearchFormPanels
