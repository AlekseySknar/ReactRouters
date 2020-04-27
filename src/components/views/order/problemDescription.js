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
        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
          color="primary"
        >
          Прикрепить фото
        </Button>
      </div>
    );
  }
}

export default ProblemDescroption;
