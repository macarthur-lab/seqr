/** This file contains sample state to use for tests */

export const STATE1 = {
  familiesByGuid: {
    F011652_1: {
      analysisNotes: 'added note',
      analysisStatus: 'Rcpc',
      analysisSummary: '',
      causalInheritanceMode: 'unknown',
      description: '',
      displayName: '1',
      familyGuid: 'F011652_1',
      familyId: '1',
      internalCaseReviewNotes: '',
      internalCaseReviewSummary: '',
      pedigreeImage: '/media/pedigree_images/1_w677Gyf.png',
      analysedBy: [],
      individualGuids: [
        'I021476_na19678',
        'I021474_na19679',
        'I021475_na19675',
      ],
    },
  },
  individualsByGuid: {
    I021474_na19679: {
      affected: 'N',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: null,
      createdDate: '2016-12-05T10:28:21.303Z',
      displayName: '',
      individualGuid: 'I021474_na19679',
      individualId: 'NA19679',
      lastModifiedDate: '2017-03-14T17:37:34.002Z',
      maternalId: '',
      paternalId: '',
      phenotipsData: {
        clinicalStatus: {
          clinicalStatus: 'affected',
        },
        contact: {
          email: 'test@broadinstitute.org',
          name: '1kg',
          user_id: '1kg',
        },
        date: '2016-05-16T06:39:08.000Z',
        date_of_birth: '',
        date_of_death: '',
        ethnicity: {
          maternal_ethnicity: [],
          paternal_ethnicity: [],
        },
        external_id: 'NA19679',
        family_history: {},
        features: [
          {
            category: 'HP:0001507',
            id: 'HP:0011405',
            label: 'Childhood onset short-limb short stature',
            observed: 'yes',
            type: 'phenotype',
          },
          {
            category: 'HP:0001507',
            id: 'HP:0004325',
            label: 'Decreased body weight',
            observed: 'yes',
            type: 'phenotype',
          },
          {
            category: 'HP:0040064',
            id: 'HP:0009821',
            label: 'Forearm undergrowth',
            observed: 'yes',
            type: 'phenotype',
          },
          {
            category: 'HP:0003011',
            id: 'HP:0001290',
            label: 'Generalized hypotonia',
            observed: 'yes',
            type: 'phenotype',
          },
          {
            category: 'HP:0000707',
            id: 'HP:0001250',
            label: 'Seizures',
            observed: 'yes',
            type: 'phenotype',
          },
          {
            category: 'HP:0000924',
            id: 'HP:0002652',
            label: 'Skeletal dysplasia',
            observed: 'yes',
            type: 'phenotype',
          },
        ],
        id: 'P0005221',
        last_modification_date: '2016-11-15T20:24:05.000Z',
        last_modified_by: '1kg',
        life_status: 'alive',
        links: {
          href: 'http://localhost:8080/rest/patients/P0005221',
          rel: 'self',
        },
        meta: {
          hgncRemote_version: '2016-11-15T04:51:40.469Z',
          hgnc_version: '2015-08-09T17:45:23.025Z',
          hpo_version: 'releases/2015-09-15',
          omim_version: '2015-10-07T18:26:19.654Z',
          phenotips_version: '1.2.6',
        },
        nonstandard_features: [],
        prenatal_perinatal_history: {},
        prenatal_perinatal_phenotype: {
          negative_prenatal_phenotype: [],
          prenatal_phenotype: [],
        },
        report_id: 'P0005221',
        reporter: '1kg',
        sex: 'F',
        solved: {
          status: 'unsolved',
        },
        specificity: {
          date: '2017-03-14T17:37:33.993Z',
          score: 0.8353186513436692,
          server: 'local-omim',
        },
      },
      phenotipsPatientId: 'P0005221',
      sampleGuids: [],
      sex: 'F',
    },
    I021475_na19675: {
      affected: 'A',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: null,
      createdDate: '2016-12-05T10:28:21.303Z',
      displayName: '',
      individualGuid: 'I021475_na19675',
      individualId: 'NA19675',
      lastModifiedDate: '2017-03-14T17:37:33.838Z',
      maternalId: 'NA19679',
      paternalId: 'NA19678',
      phenotipsData: {
        clinicalStatus: {
          clinicalStatus: 'affected',
        },
        contact: {
          email: 'harindra@broadinstitute.org',
          name: '1kg',
          user_id: '1kg',
        },
        date: '2016-05-16T05:37:34.000Z',
        date_of_birth: '',
        date_of_death: '',
        ethnicity: {
          maternal_ethnicity: [],
          paternal_ethnicity: [],
        },
        external_id: 'NA19675',
        family_history: {},
        features: [
          {
            category: 'HP:0001626',
            id: 'HP:0001631',
            label: 'Defect in the atrial septum',
            observed: 'no',
            type: 'phenotype',
          },
          {
            category: 'HP:0003011',
            id: 'HP:0001324',
            label: 'Muscle weakness',
            observed: 'yes',
            type: 'phenotype',
          },
        ],
        id: 'P0005219',
        last_modification_date: '2016-12-08T01:30:37.000Z',
        last_modified_by: '1kg',
        life_status: 'alive',
        links: {
          href: 'http://localhost:8080/rest/patients/P0005219',
          rel: 'self',
        },
        meta: {
          hgncRemote_version: '2016-12-07T05:47:00.563Z',
          hgnc_version: '2015-08-09T17:45:23.025Z',
          hpo_version: 'releases/2015-09-15',
          omim_version: '2015-10-07T18:26:19.654Z',
          phenotips_version: '1.2.6',
        },
        nonstandard_features: [],
        prenatal_perinatal_history: {},
        prenatal_perinatal_phenotype: {
          negative_prenatal_phenotype: [],
          prenatal_phenotype: [],
        },
        rejectedGenes: [
          {
            comments: '15 genes, lab A, 2013, NGS, negative ',
            gene: 'LGMD panel',
          },
        ],
        report_id: 'P0005219',
        reporter: '1kg',
        sex: 'M',
        solved: {
          status: 'unsolved',
        },
        specificity: {
          date: '2017-03-14T17:37:33.832Z',
          score: 0.34326660169343903,
          server: 'local-omim',
        },
      },
      phenotipsPatientId: 'P0005219',
      sampleGuids: [],
      sex: 'M',
    },
    I021476_na19678: {
      affected: 'N',
      caseReviewStatus: 'E',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: null,
      createdDate: '2016-12-05T10:28:21.303Z',
      displayName: '',
      individualGuid: 'I021476_na19678',
      individualId: 'NA19678',
      lastModifiedDate: '2017-03-14T17:37:33.676Z',
      maternalId: '',
      paternalId: '',
      phenotipsData: {
        clinicalStatus: {
          clinicalStatus: 'affected',
        },
        contact: {
          email: 'test@broadinstitute.org',
          name: '1kg',
          user_id: '1kg',
        },
        date: '2016-05-16T06:39:07.000Z',
        date_of_birth: '',
        date_of_death: '2008-01-01',
        ethnicity: {
          maternal_ethnicity: [],
          paternal_ethnicity: [],
        },
        external_id: 'NA19678',
        family_history: {},
        id: 'P0005220',
        last_modification_date: '2016-12-06T23:58:28.000Z',
        last_modified_by: '1kg',
        life_status: 'deceased',
        links: {
          href: 'http://localhost:8080/rest/patients/P0005220',
          rel: 'self',
        },
        meta: {
          hgncRemote_version: '2016-12-06T05:44:36.433Z',
          hgnc_version: '2015-08-09T17:45:23.025Z',
          hpo_version: 'releases/2015-09-15',
          omim_version: '2015-10-07T18:26:19.654Z',
          phenotips_version: '1.2.6',
        },
        prenatal_perinatal_history: {},
        prenatal_perinatal_phenotype: {
          negative_prenatal_phenotype: [],
          prenatal_phenotype: [],
        },
        report_id: 'P0005220',
        reporter: '1kg',
        sex: 'M',
        solved: {
          status: 'unsolved',
        },
        specificity: {
          date: '2017-03-14T17:36:11.641Z',
          score: 0,
          server: 'monarchinitiative.org',
        },
      },
      phenotipsPatientId: 'P0005220',
      sampleGuids: [],
      sex: 'M',
    },
  },
  samplesByGuid: {},
  project: {
    createdDate: '2016-05-16T05:37:08.634Z',
    deprecatedLastAccessedDate: '2017-03-14T15:15:42.580Z',
    deprecatedProjectId: '1kg',
    description: '',
    isMmeEnabled: true,
    isPhenotipsEnabled: true,
    lastModifiedDate: '2017-03-14T17:37:32.712Z',
    mmePrimaryDataOwner: 'PI',
    name: '1000 Genomes Demo',
    phenotipsUserId: '1kg',
    projectCategoryGuids: [],
    projectGuid: 'R0237_1000_genomes_demo',
  },
  user: {
    date_joined: '2015-02-19T20:22:50.633Z',
    email: 'test@broadinstitute.org',
    first_name: '',
    id: 1,
    is_active: true,
    is_staff: true,
    is_superuser: true,
    last_login: '2017-03-14T17:44:53.403Z',
    last_name: '',
    username: 'test',
  },
  familyTableState: {
    familiesFilter: 'ACCEPTED',
    familiesSortOrder: 'FAMILY_NAME',
    familiesSortDirection: -1,
    showDetails: true,
  },
}

export const STATE_WITH_2_FAMILIES = {
  familiesByGuid: {
    F011652_1: {
      familyGuid: 'F011652_1',
      projectGuid: 'R0237_1000_genomes_demo',
      analysedBy: [],
      displayName: '1',
      familyId: '1',
      individualGuids: [
        'I021476_na19678_1',
        'I021474_na19679_1',
        'I021475_na19675_1',
      ],
    },
    F011652_2: {
      familyGuid: 'F011652_2',
      projectGuid: 'R0237_1000_genomes_demo',
      analysedBy: [],
      displayName: '2',
      familyId: '2',
      individualGuids: [
        'I021476_na19678_2',
        'I021474_na19679_2',
        'I021475_na19675_2',
      ],
    },
  },
  individualsByGuid: {
    I021476_na19678_1: {
      projectGuid: 'R0237_1000_genomes_demo',
      familyGuid: 'F011652_1',
      individualId: 'NA19678',
      affected: 'N',
      caseReviewStatus: 'A',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-05T10:28:00.000Z',
      createdDate: '2016-12-05T10:28:00.000Z',
      sampleGuids: [],
      sex: 'F',
    },
    I021475_na19675_1: {
      projectGuid: 'R0237_1000_genomes_demo',
      familyGuid: 'F011652_1',
      individualId: 'NA19675',
      affected: 'A',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-05T10:29:00.000Z',
      createdDate: '2016-12-05T10:29:00.000Z',
      mmeResultGuids: ['MR0005038_HK018_0047','MR0004688_RGP_105_3'],
      mmeSubmittedDate: '2018-05-09T10:29:00.000Z',
      mmeSubmittedData: {
        patient: { id: 'NA19675_1', contact: { href: 'mailto:matchmaker@broadinstitute.org,test@test.com'} },
        phenotypes: [
          {id: 'HP:0011405', label: 'Childhood onset short-limb short stature', observed: 'yes'},
          {id: "HP:0012638", label: "Abnormality of nervous system physiology", observed: "no"},
          {id: "HP:0001371", label: "Flexion contracture", observed: "yes"}
        ],
        geneVariants: [{ geneId: "ENSG00000228198", alt: 'T', ref: 'TC', chrom: '1', pos: 248367227 }],
      },
      sampleGuids: [],
      sex: 'M',
    },
    I021474_na19679_1: {
      projectGuid: 'R0237_1000_genomes_demo',
      familyGuid: 'F011652_1',
      individualId: 'NA19679',
      affected: 'N',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-05T10:30:00.000Z',
      createdDate: '2016-12-05T10:30:00.000Z',
      sampleGuids: [],
      sex: 'M',
    },
    I021476_na19678_2: {
      projectGuid: 'R0237_1000_genomes_demo',
      familyGuid: 'F011652_2',
      individualId: 'NA19678',
      affected: 'N',
      caseReviewStatus: 'A',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-06T10:28:00.000Z',
      createdDate: '2016-12-06T10:28:00.000Z',
      sampleGuids: ['S2310656_wal_mc16200_mc16203'],
      sex: 'F',
    },
    I021475_na19675_2: {
      projectGuid: 'R0237_1000_genomes_demo',
      familyGuid: 'F011652_2',
      individualId: 'NA19675',
      affected: 'A',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-06T10:29:00.000Z',
      createdDate: '2016-12-06T10:29:00.000Z',
      sampleGuids: [],
      sex: 'M',
    },
    I021474_na19679_2: {
      projectGuid: 'R0237_1000_genomes_demo',
      familyGuid: 'F011652_2',
      individualId: 'NA19679',
      affected: 'N',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-06T10:30:00.000Z',
      createdDate: '2016-12-06T10:30:00.000Z',
      sampleGuids: [],
      sex: 'M',
    },
  },
  samplesByGuid: {
    S2310656_wal_mc16200_mc16203: {
      createdDate: "2018-03-30T11:50:40.079Z",
      datasetFilePath: "gs://seqr-datasets/GRCh37/cmg_sankaran_wes/CMG_MYOSEQ.vcf.gz",
      datasetName: null,
      datasetType: "VARIANTS",
      elasticsearchIndex: "cmg_walsh_wes_sep2017",
      individualGuid: "I021476_na19678_2",
      loadedDate: "2018-03-13T13:25:21.551Z",
      projectGuid: "R0237_1000_genomes_demo",
      sampleGuid: "S2310656_wal_mc16200_mc16203",
      sampleId: "WAL_MC16200_MC16203",
      sampleStatus: "loaded",
      sampleType: "WES",
    },
  },
  analysisGroupsByGuid: {
    AG0000183_test_group: {
      analysisGroupGuid: "AG0000183_test_group",
      createdDate: "2018-08-09T18:53:24.207Z",
      description: "",
      familyGuids: ["F011652_1"],
      name: "Test Group",
      projectGuid: "R0237_1000_genomes_demo",
    },
  },
  currentProjectGuid: 'R0237_1000_genomes_demo',
  projectsByGuid: {
    R0237_1000_genomes_demo: {
      createdDate: '2016-05-16T05:37:08.634Z',
      deprecatedLastAccessedDate: '2017-03-14T15:15:42.580Z',
      deprecatedProjectId: '1kg',
      description: '',
      isMmeEnabled: true,
      isPhenotipsEnabled: true,
      lastModifiedDate: '2017-03-14T17:37:32.712Z',
      mmePrimaryDataOwner: 'PI',
      mmeContactInstitution: 'Broad',
      mmeContactUrl: 'test@broadinstitute.org',
      name: '1000 Genomes Demo',
      phenotipsUserId: '1kg',
      projectCategoryGuids: [],
      projectGuid: 'R0237_1000_genomes_demo',
      collaborators: [
        {
          dateJoined: '2019-02-20T18:01:36.677Z',
          displayName: '',
          email: 'test1@broadinstitute.org',
          firstName: '',
          hasEditPermissions: true,
          hasViewPermissions: true,
          id: 1041,
          isStaff: false,
          lastLogin: '1970-01-01T00:00:00Z',
          lastName: '',
          username: 'test_user1',
        },
        {
          dateJoined: '2019-02-20T18:01:36.677Z',
          displayName: '',
          email: 'test2@broadinstitute.org',
          firstName: '',
          hasEditPermissions: true,
          hasViewPermissions: true,
          id: 1041,
          isStaff: true,
          lastLogin: '1970-01-01T00:00:00Z',
          lastName: '',
          username: 'test_user2',
        },
      ],
    },
  },
  familyTableState: {
    familiesFilter: 'ACCEPTED',
    familiesSortOrder: 'FAMILY_NAME',
    familiesSortDirection: -1,
    showDetails: true,
  },
  user: {
    date_joined: '2015-02-19T20:22:50.633Z',
    email: 'test@broadinstitute.org',
    first_name: '',
    id: 1,
    is_active: true,
    is_staff: true,
    is_superuser: true,
    last_login: '2017-03-14T17:44:53.403Z',
    last_name: '',
    username: 'test',
    displayName: 'Test User',
  },
  savedVariantTableState: { hideExcluded: true, recordsPerPage: 1 },
  projectSavedVariantsLoading: {},
  savedVariantsByGuid: {
    SV0000004_116042722_r0390_1000: {
      alt: "T",
      annotation: {
        cadd_phred: "27.2",
        freqs: { AF: null, exac: 0.0006726888333653661, g1k: 0, gnomad_exomes: 0.00006505916317651364 },
        popCounts: { AC: null, AN: null, exac_hemi: null, exac_hom: null, gnomadExomesAC: null, gnomadGenomesAC: null} ,
        vepAnnotations: [
          {
            aminoAcids: "P/X",
            canonical: "YES",
            cdnaPosition: "897",
            cdsPosition: "859",
            codons: "Ccc/cc",
            consequence: "frameshift_variant",
            hgvsc: "ENST00000456743.1:c.862delC",
            hgvsp: "ENSP00000389625.1:p.Leu288SerfsTer10",
            isChosenTranscript: true,
            transcriptId: "ENST00000456743",
          }
        ],
        vepConsequence: "frameshift_variant",
        vepGroup: "frameshift",
        worstVepAnnotation: {
          aminoAcids: "P/X", hgvsc: "ENST00000456743.1:c.862delC", hgvsp: "ENSP00000389625.1:p.Leu288SerfsTer10",
          lof: "HC", lofFilter: "", lofFlags: "SINGLE_EXON", proteinPosition: "287", symbol: "OR2M3"
        }
      },
      chrom: "22",
      clinvar: { clinsig: "", variantId: null },
      familyGuids: ["F011652_1"],
      functionalData: [],
      genomeVersion: "37",
      genotypes: {
        I021475_na19675_1: {
          ab: 1,
          ad: "0,74",
          alleles: ["T", "T"],
          cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
          dp: "74",
          filter: "pass",
          gq: 99,
          numAlt: 2,
          pl: "358,132,0",
        },
        NA19678: {
          ab: 0,
          ad: "77,0",
          alleles: ["TC", "TC"],
          cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
          dp: "77",
          filter: "pass",
          gq: 99,
          numAlt: 0,
          pl: "0,232,3036",
        },
        NA19679: {
          ab: 0,
          ad: "71,0",
          alleles: ["TC", "TC"],
          cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
          dp: "71",
          filter: "pass",
          gq: 99,
          numAlt: 0,
          pl: "0,213,1918",
        },
      },
      hgmd: {accession: null, class: null},
      liftedOverChrom: "",
      liftedOverGenomeVersion: "38",
      liftedOverPos: "",
      mainTranscriptId: 'ENST00000456743',
      transcripts: {ENSG00000228198: [{
        aminoAcids: "P/X", hgvsc: "ENST00000456743.1:c.862delC", hgvsp: "ENSP00000389625.1:p.Leu288SerfsTer10", lof: "HC",
        lofFilter: "", lofFlags: "SINGLE_EXON", proteinPosition: "287", symbol: "OR2M3", geneId: 'ENSG00000228198',
        majorConsequence: 'frameshift_variant', transcriptId: 'ENST00000456743'
      }]},
      notes: [{
        dateSaved: "2018-05-29T17:25:23.770Z", note: "test note edited", noteGuid: "VN0727076_116042722_r0390_1000",
        submitToClinvar: true, user: "hsnow@broadinstitute.org"
      }],
      origAltAlleles: ["T"],
      pos: 45919065,
      projectGuid: 'R0237_1000_genomes_demo',
      ref: "TTTC",
      tags: [
        {
          category: "Collaboration", color: "#668FE3", dateSaved: "2018-05-25T21:00:51.260Z", name: "Review",
          searchParameters: null, tagGuid: "VT1726942_1248367227_r0390_100", user: "hsnow@broadinstitute.org",
        },
      ],
      variantId: "SV0000004_116042722_r0390_1000",
      variantGuid: "SV0000004_116042722_r0390_1000",
      xpos: 22045919065,
    },
    SV0000002_1248367227_r0390_100: {
      alt: "T",
      annotation: {
        cadd_phred: "27.2",
        freqs: { AF: null, exac: 0.0006726888333653661, g1k: 0, gnomad_exomes: 0.00006505916317651364 },
        popCounts: { AC: null, AN: null, exac_hemi: null, exac_hom: null, gnomadExomesAC: null, gnomadGenomesAC: null} ,
        vepAnnotations: [
          {
            aminoAcids: "P/X",
            canonical: "YES",
            cdnaPosition: "897",
            cdsPosition: "859",
            codons: "Ccc/cc",
            consequence: "frameshift_variant",
            hgvsc: "ENST00000456743.1:c.862delC",
            hgvsp: "ENSP00000389625.1:p.Leu288SerfsTer10",
            isChosenTranscript: true,
            transcriptId: "ENST00000456743",
          }
        ],
        vepConsequence: "frameshift_variant",
        vepGroup: "frameshift",
        worstVepAnnotation: {
          aminoAcids: "P/X", hgvsc: "ENST00000456743.1:c.862delC", hgvsp: "ENSP00000389625.1:p.Leu288SerfsTer10",
          lof: "HC", lofFilter: "", lofFlags: "SINGLE_EXON", proteinPosition: "287", symbol: "OR2M3"
        }
      },
      chrom: "1",
      clinvar: { clinsig: "", variantId: null },
      familyGuids: ["F011652_1"],
      functionalData: [
        { color: "#311B92", dateSaved: "2018-05-24T15:30:04.483Z", metadata: "An updated note",
          metadataTitle: null, name: "Biochemical Function", user: "hsnow@broadinstitute.org" },
        { color: "#880E4F", dateSaved: "2018-05-24T15:34:01.365Z", metadata: "2", metadataTitle: "LOD Score",
          name: "Genome-wide Linkage", user: "hsnow@broadinstitute.org" },
      ],
      genes: [
        {
          constraints: {
            lof: { constraint: 0.0671997116609769, rank: 8248, totalGenes: 18225 },
            missense: { constraint: -0.7885573790993861, rank: 15052, totalGenes: 18225 },
          },
          diseaseDbPhenotypes: [],
          diseaseGeneLists: [],
          geneId: "ENSG00000228198",
          symbol: "OR2M3",
        }
      ],
      genomeVersion: "37",
      genotypes: {
        I021475_na19675_1: {
          ab: 1,
          ad: "0,74",
          alleles: ["T", "T"],
          cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
          dp: "74",
          filter: "pass",
          gq: 99,
          numAlt: 2,
          pl: "358,132,0",
        },
        NA19678: {
          ab: 0,
          ad: "77,0",
          alleles: ["TC", "TC"],
          cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
          dp: "77",
          filter: "pass",
          gq: 99,
          numAlt: 0,
          pl: "0,232,3036",
        },
        NA19679: {
          ab: 0,
          ad: "71,0",
          alleles: ["TC", "TC"],
          cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
          dp: "71",
          filter: "pass",
          gq: 99,
          numAlt: 0,
          pl: "0,213,1918",
        },
      },
      hgmd: {accession: null, class: null},
      liftedOverChrom: "",
      liftedOverGenomeVersion: "38",
      liftedOverPos: "",
      notes: [],
      origAltAlleles: ["T"],
      mainTranscriptId: 'ENST00000262738',
      transcripts: {ENSG00000228198: [{transcriptId: 'ENST00000262738',  majorConsequence: 'missense_variant'}]},
      pos: 248367227,
      projectGuid: 'R0237_1000_genomes_demo',
      ref: "TC",
      tags: [
        {
          category: "Collaboration", color: "#668FE3", dateSaved: "2018-05-25T21:00:51.260Z", name: "Review",
          searchParameters: null, tagGuid: "VT1726942_1248367227_r0390_100", user: "hsnow@broadinstitute.org",
        },
        {
          category: "CMG Discovery Tags",
          color: "#44AA60",
          dateSaved: "2018-03-23T19:59:12.262Z",
          name: "Tier 1 - Phenotype not delineated",
          searchParameters: "https://seqr.broadinstitute.org/project/1kg/family/1/mendelian-variant-search#search/c2edbeae/results",
          tagGuid: "VT1708635_1248367227_r0390_100",
          user: "hsnow@broadinstitute.org",
        },
      ],
      variantId: "SV0000002_1248367227_r0390_100",
      variantGuid: "SV0000002_1248367227_r0390_100",
      xpos: 1248367227,
    },
    SV0000003_2246859832_r0390_100: {
      alt: "T",
      annotation: {
        cadd_phred: "27.2",
        freqs: { AF: null, exac: 0.0006726888333653661, g1k: 0, gnomad_exomes: 0.00006505916317651364 },
        popCounts: { AC: null, AN: null, exac_hemi: null, exac_hom: null, gnomadExomesAC: null, gnomadGenomesAC: null} ,
        vepAnnotations: [
          {
            aminoAcids: "P/X",
            canonical: "YES",
            cdnaPosition: "897",
            cdsPosition: "859",
            codons: "Ccc/cc",
            consequence: "frameshift_variant",
            hgvsc: "ENST00000456743.1:c.862delC",
            hgvsp: "ENSP00000389625.1:p.Leu288SerfsTer10",
            isChosenTranscript: true,
            transcriptId: "ENST00000456743",
          }
        ],
        vepConsequence: "frameshift_variant",
        vepGroup: "frameshift",
        worstVepAnnotation: {
          aminoAcids: "P/X", hgvsc: "ENST00000456743.1:c.862delC", hgvsp: "ENSP00000389625.1:p.Leu288SerfsTer10",
          lof: "HC", lofFilter: "", lofFlags: "SINGLE_EXON", proteinPosition: "287", symbol: "OR2M3"
        }
      },
      chrom: "22",
      clinvar: { clinsig: "", variantId: null },
      familyGuids: ["F011652_2"],
      functionalData: [],
      genes: [
        {
          constraints: {
            lof: { constraint: 0.0671997116609769, rank: 8248, totalGenes: 18225 },
            missense: { constraint: -0.7885573790993861, rank: 15052, totalGenes: 18225 },
          },
          diseaseDbPhenotypes: [],
          diseaseGeneLists: [],
          geneId: "ENSG00000228198",
          symbol: "OR2M3",
        }
      ],
      genomeVersion: "37",
      genotypes: {
        I021475_na19675_1: {
          ab: 1,
          ad: "0,74",
          alleles: ["T", "T"],
          cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
          dp: "74",
          filter: "pass",
          gq: 99,
          numAlt: 2,
          pl: "358,132,0",
        },
        NA19678: {
          ab: 0,
          ad: "77,0",
          alleles: ["TC", "TC"],
          cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
          dp: "77",
          filter: "pass",
          gq: 99,
          numAlt: 0,
          pl: "0,232,3036",
        },
        NA19679: {
          ab: 0,
          ad: "71,0",
          alleles: ["TC", "TC"],
          cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
          dp: "71",
          filter: "pass",
          gq: 99,
          numAlt: 0,
          pl: "0,213,1918",
        },
      },
      hgmd: {accession: null, class: null},
      liftedOverChrom: "",
      liftedOverGenomeVersion: "38",
      liftedOverPos: "",
      mainTranscriptId: null,
      transcripts: {},
      notes: [],
      origAltAlleles: ["T"],
      pos: 248367227,
      projectGuid: 'R0237_1000_genomes_demo',
      ref: "C",
      tags: [
        {
          category: "Collaboration", color: "#668FE3", dateSaved: "2018-05-25T21:00:51.260Z", name: "Excluded",
          searchParameters: null, tagGuid: "VT1726942_1248367227_r0390_100", user: "hsnow@broadinstitute.org",
        }
      ],
      variantId: "SV0000003_2246859832_r0390_100",
      variantGuid: "SV0000003_2246859832_r0390_100",
      xpos: 22046859832,
    },
  },
  mmeResultsByGuid: {
    MR0005038_HK018_0047: {
      individualGuid: 'I021475_na19675_1',
      geneVariants: [{geneId: "ENSG00000228198"}],
      phenotypes: [
        {id: "HP:0012638", label: "Abnormality of nervous system physiology", observed: "yes"},
        {id: "HP:0001371", label: "Flexion contracture", observed: "yes"}
      ],
      id: "12531",
      matchStatus: {
        comments: "This seems promising",
        createdDate: "2017-07-18T20:38:53.195Z",
        deemedIrrelevant: false,
        flagForAnalysis: false,
        hostContacted: true,
        matchmakerResultGuid: "MR0005038_HK018_0047",
      },
      patient: {
        contact: { href: "mailto:crowley@unc.edu", institution: "UNC Chapel Hill", name: "James Crowley" },
        id: "12531",
        label: "Childhood Psychiatric Disorder Candidate Genes",
        inheritanceMode: 'Recessive',
      },
      score: 1,
    },

    MR0004688_RGP_105_3: {
      geneVariants: [{ geneId: "ENSG00000272333" }],
      id: "10509",
      individualGuid: "I021475_na19675_1",
      matchStatus: {
          comments: "",
          createdDate: "2018-07-26T17:36:25.422Z",
          deemedIrrelevant: false,
          flagForAnalysis: false,
          hostContacted: false,
          matchRemoved: true,
          matchmakerResultGuid: "MR0004688_RGP_105_3",
          weContacted: true
      },
      patient: {
          contact: {
              href: "mailto:j.weiss@vumc.nl",
              institution: "VU University Medical Center",
              name: "Janneke Weiss"
          },
          genomicFeatures: [{ gene: { id: "ENSG00000272333" } }],
          id: "10509",
          label: "2016-174",
          sex: "MALE",
          species: "NCBITaxon:9606"
      },
      phenotypes: [],
      score: 1.0
    },
  },
  search: { familiesByGuid: { result: ['F011652_1', 'F011652_2'] } },
  genesById: { 'ENSG00000228198': { geneId: 'ENSG00000228198', geneSymbol: 'OR2M3' } },
  igvReadsVisibility: {},
  usersByUsername: {
    '3v9tbN78K6': {
      dateJoined: '2019-02-28T15:54:32Z',
      displayName: '',
      email: 'jperezde@broadinstitute.org',
      firstName: '',
      id: 1042,
      isStaff: true,
      lastLogin: '2019-05-28T13:17:29.091Z',
      lastName: '',
      username: '3v9tbN78K6',
    },
    '4MW8vPtmHG': {
      dateJoined: '2017-08-28T19:19:50Z',
      displayName: 'Mekdes',
      email: 'mgetaneh@broadinstitute.org',
      firstName: 'Mekdes',
      id: 771,
      isStaff: true,
      lastLogin: '2018-06-11T17:42:45.601Z',
      lastName: '',
      username: '4MW8vPtmHG',
    },
    '5P4YVq2xNj': {
      dateJoined: '2017-03-14T15:09:40Z',
      displayName: '',
      email: 'mwilson@broadinstitute.org',
      firstName: '',
      id: 707,
      isStaff: true,
      lastLogin: '2019-06-17T17:55:47.809Z',
      lastName: '',
      username: '5P4YVq2xNj',
    },
    '5jRbtjU9Dz': {
      dateJoined: '2018-04-10T20:29:26Z',
      displayName: 'Alysia Lovgren',
      email: 'alovgren@broadinstitute.org',
      firstName: 'Alysia',
      id: 906,
      isStaff: false,
      lastLogin: '2019-06-13T09:36:18.419Z',
      lastName: 'Lovgren',
      username: '5jRbtjU9Dz',
    },
    'test': {
      dateJoined: '2015-02-19T20:22:50.633Z',
      displayName: '',
      email: 'test@broadinstitute.org',
      firName: '',
      id: 1,
      isStaff: true,
      lastLogin: '2017-03-14T17:44:53.403Z',
      last_name: '',
      username: 'test',
    },
    'test_user1': {
      dateJoined: '2019-02-20T18:01:36.677Z',
      displayName: '',
      email: 'test1@broadinstitute.org',
      firstName: '',
      id: 1041,
      isStaff: false,
      lastLogin: '1970-01-01T00:00:00Z',
      lastName: '',
      username: 'test_user1',
    },
    'test_user2': {
      dateJoined: '2019-02-20T18:01:36.677Z',
      displayName: '',
      email: 'test2@broadinstitute.org',
      firstName: '',
      id: 1041,
      isStaff: true,
      lastLogin: '1970-01-01T00:00:00Z',
      lastName: '',
      username: 'test_user2',
    },
  },
}
