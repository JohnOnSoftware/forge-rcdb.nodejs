import ConfiguratorHomeView from './ConfiguratorHomeView'
import ViewerConfigurator from 'Viewer.Configurator'
import { browserHistory } from 'react-router'
import './ConfiguratorView.scss'
import React from 'react'

class ConfiguratorView extends React.Component {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  constructor (props) {

    super (props)

    this.onError = this.onError.bind(this)

    this.notify = {
      remove: this.props.removeNotifications,
      update: this.props.updateNotification,
      add: this.props.addNotification
    }
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  componentWillMount () {

    this.props.setNavbarState({
      links: {
        settings: false
      }
    })
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  onError (error) {

    if (error.responseJSON === 'Not Found') {

      browserHistory.push('/404')
    }
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  render () {

    const view = this.props.location.query.id
      ? <ViewerConfigurator
          setNavbarState={this.props.setNavbarState}
          setViewerEnv={this.props.setViewerEnv}
          modelId={this.props.location.query.id}
          appState={this.props.appState}
          location={this.props.location}
          database='configurator'
          onError={this.onError}
          notify={this.notify}
          showLoader={true}
        />
      : <ConfiguratorHomeView/>

    return (
      <div className="configurator-view">
        { view }
      </div>
    )
  }
}

export default ConfiguratorView























































