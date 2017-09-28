import React from 'react'
import PropTypes from 'prop-types'

const index = ({ children, footer, onClose, title }) => (
  <div>
    <div className="modal-backdrop show" />

    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>

            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              onClick={onClose}
              type="button"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">{children}</div>

          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </div>
  </div>
)

index.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  onClose: PropTypes.func,
  title: PropTypes.string,
}
index.defaultProps = {
  footer: null,
  onClose: () => {},
  title: '',
}

export default index
