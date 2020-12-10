import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import AudioPlayer from 'react-h5-audio-player'
import Modal from 'react-bootstrap/Modal'
import { CardWrapper } from './styles'
import noImage from './images/unnamed.jpg'

const Card = ({ podcast, color, type }) => {
  return (
    <CardWrapper
      color={color}
      image={podcast.attributes.featured_image_url || noImage}
    >
      <div className='podcast'>
        <div className='podcast-image-container'>
          <img
            className='podcast-image'
            src={podcast.attributes.featured_image_url || noImage}
            alt='audio'
            width={300}
            height={300}
          />
        </div>

        <div className='podcast-icon'>
          <FontAwesomeIcon
            className='play-icon'
            size='3x'
            icon={faPlayCircle}
            onClick={(e) => this.clickHandler(e, index)}
          />
        </div>

        <div className='podcast-info'>
          <p className='podcast-chapeu'>
            <Moment format='DD.MM.YYYY - HH:MM'>
              {podcast.attributes.created_at}
            </Moment>
          </p>
          <h4 className='podcast-titulo'>{podcast.attributes.title}</h4>
          {/* <div className="podcast-corpo">
                        {podcast.body}
                    </div> */}
          <div className='podcast-bigode'>
            <div
              className='podcast-botao'
              onClick={(e) => this.clickHandler(e, index)}
            >
              Ouça o podcast
            </div>
          </div>
        </div>

        <Modal
          id={podcast.key}
          size='lg'
          show={false}
          onHide
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Body>
            <div className='modal-content-container'>
              {/* <p className="chapeu-componente">{podcast.attributes.hat}</p> */}
              <p>
                <Moment format='DD.MM.YYYY - HH:MM'>
                  {podcast.attributes.created_at}
                </Moment>
              </p>
              <h4 className='modal-title'>{podcast.attributes.title}</h4>
              <p className='bigode-componente'>{podcast.attributes.subtitle}</p>
              <AudioPlayer
                autoPlay
                src={podcast.attributes.podcast_audio_url}
                onPlay={(e) => console.log('onPlay')}
                // other props here
              />

              <a href={podcast.attributes.podcast_audio_url}>Baixar podcast</a>
              <br />
              <br />
              <div className='podcast-imagem-destaque-container'>
                <img
                  className='podcast-imagem-destaque'
                  src={podcast.attributes.featured_image_url || noImage}
                  alt={podcast.attributes.title}
                />
                {/* <p className="podcast-imagem-destaque-credito">
                  Foto: {podcast.attributes.credit_photo}
                </p> */}
              </div>
              <div className='podcast-autoria'>
                <p>Texto de {podcast.attributes.credit_journalist}</p>
              </div>

              {/* <audio width="100%" controls>
                                <source src={podcast.audio_file_url} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio> */}
              <div
                className='podcast-corpo'
                dangerouslySetInnerHTML={{ __html: podcast.attributes.body }}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </CardWrapper>
  )
}

Card.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    attributes: PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      featured_image_url: PropTypes.string,
      published_at: PropTypes.string
    })
  })
}

Card.defaultProps = {
  article: {
    attributes: {
      featured_image_url: noImage
    }
  }
}

export default Card
