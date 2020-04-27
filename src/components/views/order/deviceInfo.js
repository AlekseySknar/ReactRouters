import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import ClearIcon from "@material-ui/icons/Clear";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class DeviceInfoInput extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="standard-adornment-password">
              Производитель
            </InputLabel>
            <OutlinedInput
              id="standard-adornment-password"
              value={this.props.manufacturer}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={this.props.handleClickClear}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={120}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={this.props.hasError}
            value={this.props.model}
            onChange={this.props.handleChangeModel}
            label="Модель"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    );
  }
}

export default DeviceInfoInput;
