import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import ClearIcon from "@material-ui/icons/Clear";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

class DeviceInfoInput extends React.Component {
  render() {
    return (
      <div>
        <div>
          <FormControl variant="outlined">
            <InputLabel htmlFor="standard-adornment-password">
              Производитель
            </InputLabel>
            <OutlinedInput
              id="standard-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={120}
            />
          </FormControl>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Марка"
            variant="outlined"
            value={this.props.manufacturer}
            onChange={this.props.handleChangeManufacturer}
            fullWidth
          />
        </div>
      </div>
    );
  }
}

export default DeviceInfoInput;
