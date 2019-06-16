## React Guide

## Component Life Cycle

### Creation Life Cycle

**constructor(props)**
- call super(props)
- use it for basic initialization work 
- DO NOT CAUSE SIDE EFFECTS e.g. Sending HTTP Request, storing in DB etc

**getDerivedStateFromProps(props, state)**
- We can sync `state` data with change in `props`
- DO NOT CAUSE SIDE EFFECTS e.g. Sending HTTP Request

**componentWillMount()**
- This is a legacy component and should NOT be used
- This method will NOT be invoked when used with `getDerivedStateFromProps`
- Historically, this can be used for preparing our state correctly

**render()**
- Returns JSX
- DO NOT do anything that can block the rendering process e.g. HTTP request

**componentDidMount()**
- Invoked after all child components are rendered and there life cycle hook is finished
- we CAN CAUSE Side effects in it
- Do NOT update state in it i.e. call `setState`
  - we can call `setState` in then block of promise after we have sent HTTP request but do NOT call `setState` synchronously.


  ### Update Life Cycle