import { Container } from "react-bootstrap"
import { person } from "./data"
import DatesCount from "./component/DatesCount"
import DatesList from "./component/DatesList"
import DatesAction from "./component/DatesAction"
import React, { useState, useEffect } from "react"

function App() {

  const [personData, setPersonData] = useState(person)

  const onDelete = () => {
    setPersonData([])
  }
  const onViewData = () => {
    setPersonData(person)
  }

  useEffect(() => {
    setPersonData([])
  }, [])

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />

        <DatesList person={personData} />

        <DatesAction deleteData={onDelete} viewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
