import React from 'react';

type StateType = {
  count: number,
  subTitle: string
};

type PropsType = {
  title: string;
}

class ClassComp extends React.Component<PropsType, StateType> {  
  constructor(props: any) {
    super(props);
    this.state = {
      subTitle: 'life cycle ...',
      count: 0
    };

    this.handleUpButton = this.handleUpButton.bind(this);
    this.handleDownButton = this.handleDownButton.bind(this);
  }

  handleUpButton() {
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }

  handleDownButton() {
    this.setState({
      ...this.state,
      count: this.state.count - 1
    })
  }

  componentDidMount() {
    console.log('클래스 컴포넌트 component Did Mount : ', this.state.count);
  }

  componentDidUpdate() {
    console.log('클래스 컴포넌트 component Did Update : ', this.state.count);
  }

  componentWillUnmount() {
    console.log('클래스 컴포넌트 component Will Unmount : ', this.state.count);
  }

  render() {
    return (
      <div style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'tomato'
      }}>
        <div style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
          <h1>{this.props.title}</h1>
          <h4>{this.state.subTitle}</h4>
        </div>

        <div style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <h1>{this.state.count}</h1>
        </div>
       
       <div style={{
         flex: 1,
       }}>
         <button 
          style={{
            height: '100%',
            width: '50%',
            color: 'blue'
          }}
          onClick={this.handleUpButton}
          >
            UP
          </button>

          <button 
          style={{
            height: '100%',
            width: '50%',
            color: 'red'
          }}
          onClick={this.handleDownButton}
          >
            DOWN
          </button>
       </div>
      </div>
    )
  }
}

export default ClassComp;