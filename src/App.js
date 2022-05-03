import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Container, Grid } from "@mui/material/";
import axios from "axios";

import PeopleList from "./components/PeopleList";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [spinnerIsVisible, setSpinnerIsVisible] = useState(false);
  const [isDataEnd, setIsDataEnd] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setSpinnerIsVisible(true);
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${page}`
      );
      const { results } = response.data;
      if (response.status === 200) {
        setPage(page + 1);
        setData([...data].concat(results));
      }
    } catch (e) {
      console.log(e);
      setIsDataEnd(true);
    }
    setSpinnerIsVisible(false);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={6} style={{ alignSelf: "center" }}>
          {spinnerIsVisible && (
            <CircularProgress
              color="success"
              style={{
                width: "100px",
                height: "100px",
                alignItems: "center",
                marginLeft: "40%",
              }}
            />
          )}
          {!isDataEnd ? (
            !spinnerIsVisible && (
              <Button
                variant="contained"
                onClick={fetchData}
                style={{ marginLeft: "40%" }}
              >
                Cargar más
              </Button>
            )
          ) : (
            <h1>No hay más datos por cargar</h1>
          )}
        </Grid>
        <Grid item xs={6}>
          <Container>
            <PeopleList data={data} />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
