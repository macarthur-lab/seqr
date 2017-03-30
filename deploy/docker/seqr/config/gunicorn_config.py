command = 'gunicorn'
bind = '127.0.0.1:8000'
workers = 1
loglevel = 'info'
pythonpath='/seqr'
timeout = 120   # seconds (default is 30)

# errorlog = '${INSTALL_DIR}/logs/gunicorn-error.log'
# accesslog = '${INSTALL_DIR}/logs/gunicorn-access.log'
#worker_tmp_dir = '/tmp'
