import { useEffect } from "react";
import type { RootState } from "./app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMonster,
  resetSelectedMonster,
  setAllMonsters,
} from "./reducers/cardSlice";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import "./App.css";
import { CardMedia, Grid, Typography } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const selectedMonsterId = useSelector(
    (state: RootState) => state.monster.selectedMonsterId
  );

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const response = await fetch("http://localhost:3000/monsters");
        const data = await response.json();
        dispatch(setAllMonsters(data));
      } catch (error) {
        console.error("Error fetching monsters:", error);
      }
    };

    fetchMonsters();
  }, [dispatch]);

  const monsters = useSelector((state: RootState) => state.monster.allMonsters);

  return (
    <>
      <h1>Card Battle</h1>

      <Grid container spacing={2}>
        {monsters.map((monster) => (
          <Grid item key={monster.id} xs={12} sm={6} md={4} lg={3}>
            {" "}
            {/* Set Grid item and spacing */}
            <Card key={monster.id} sx={{ margin: 2, borderRadius: 2 }}>
              <CardMedia
                sx={{ height: 140, margin: 1, borderRadius: 2 }}
                image={monster.imageUrl}
                title={monster.name}
              />
              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  display: "flex",
                  flexDirection: "initial",
                  paddingLeft: 1,
                }}
              >
                {monster.name}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="card">
        {selectedMonsterId ? (
          <>
            <Card sx={{ margin: 2, borderRadius: 2 }}>
              <CardMedia
                sx={{ height: 140, margin: 1, borderRadius: 2 }}
                image="/img/ctchulu.jpg"
                title="green iguana"
              />
              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  display: "flex",
                  flexDirection: "initial",
                  paddingLeft: 1,
                }}
              >
                {selectedMonsterId}
              </Typography>
            </Card>
            <Button
              variant="contained"
              onClick={() => dispatch(resetSelectedMonster())}
            >
              Reset Monster
            </Button>
          </>
        ) : (
          <div>
            <p>No monster selected</p>
            <Button
              variant="contained"
              onClick={() => dispatch(selectMonster("monster-1"))}
            >
              Select Monster 1
            </Button>
            <Button
              variant="contained"
              onClick={() => dispatch(selectMonster("monster-2"))}
            >
              Select Monster 2
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
