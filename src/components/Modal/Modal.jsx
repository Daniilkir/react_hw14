import React, { Component } from 'react';
import style from './Modal.module.css'

export class Modal extends Component {

  handleModal = (event) => {
      if (event.code === "Escape") { 
          this.props.onClose()
      }
  }

  componentDidMount() {
      window.addEventListener("keydown", this.handleModal)
  }

  componentWillUnmount() {
      window.removeEventListener("keydown", this.handleModal)
  }

  closeModal = (event) => {
      if (event.currentTarget === event.target) {
          this.props.onClose()
      }
  }

  render() {
      return (
          <div onClick={this.closeModal} className={style.backdrop}>
              <div className={style.modal}>
                <div className={style.modalContent}>
                  {this.props.children}
                  </div>
              </div>
          </div>
      )
  }
}

