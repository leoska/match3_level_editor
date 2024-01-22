import React from "react";
import { Card, Label, TextInput } from "@gravity-ui/uikit";
import { boardSlice } from "../../store/reducers/BoardSlice";
import { useAppDispatch } from "../../store/hooks";

import "./index.css";

export default function TabSettings(): JSX.Element {
  const { setWidth, setHeight } = boardSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="tab-settings">
      <Card>
        <Label className="tab-settings__label">
          <h3>Level general settings</h3>
        </Label>
        <p>
          <TextInput
            label={"Random seed"}
            placeholder="0-2147483647"
            hasClear={true}
            type="number"
          ></TextInput>
        </p>
        <p>
          <TextInput
            label={"Width"}
            placeholder="9"
            type="number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(setWidth(Number(event.target.value)))
            }
          ></TextInput>
          <TextInput
            label={"Height"}
            placeholder="9"
            type="number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(setHeight(Number(event.target.value)))
            }
          ></TextInput>
        </p>
      </Card>
      <Card>
        <Label className="tab-settings__label">
          <h3>Available moves</h3>
        </Label>
        <p>
          <TextInput
            label={"Moves"}
            placeholder="0-2147483647"
            defaultValue="25"
            type="number"
          ></TextInput>
        </p>
      </Card>
    </div>
  );
}
