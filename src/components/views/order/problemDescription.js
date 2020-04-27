import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

class ProblemDescroption extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          Опишите вашу проблему в двух предложениях
        </h1>
        <TextField
          id="outlined-basic"
          label="Проблема"
          variant="outlined"
          fullWidth={true}
          multiline={true}
          rows={4}
          rowsMax={6}
        />
        <div>
          <input
            style={{ display: "none" }}
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              startIcon={<CloudUploadIcon />}
              color="primary"
              component="span"
            >
              Прикрепить фото
            </Button>
          </label>
        </div>
      </div>
    );
  }
}

export default ProblemDescroption;
