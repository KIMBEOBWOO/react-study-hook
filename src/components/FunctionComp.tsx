import React from 'react';


type StateType = {
  count: number,
  subTitle: string
};

type PropsType = {
  title: string;
}

function FunctionComp(props: PropsType) {
  const [state, setState] = React.useState<StateType>({count: 0, subTitle: 'life cycle ... '});

  function handleUpButton() {
    setState({
      ...state,
      count: state.count + 1
    })
  }

  function handleDownButton() {
    setState({
      ...state,
      count: state.count - 1
    })
  }

  React.useEffect(() => {
    console.log('함수형 컴포넌트 component Did Mount : ', state.count);
  })

  React.useEffect(() => {
    console.log('함수형 컴포넌트 component Did Update : ', state.count);
    return () => {
      console.log('함수형 컴포넌트 component Did Unmount ??? : ', state.count);
    }
  },[state.count])

  return (
    <div style={{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'chocolate'
    }}>
      <div style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
        <h1>{props.title}</h1>
        <h4>{state.subTitle}</h4>
      </div>

      <div style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <h1>{state.count}</h1>
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
        onClick={handleUpButton}
        >
          UP
        </button>

        <button 
        style={{
          height: '100%',
          width: '50%',
          color: 'red'
        }}
        onClick={handleDownButton}
        >
          DOWN
        </button>
     </div>
    </div>
  )
}

export default FunctionComp;