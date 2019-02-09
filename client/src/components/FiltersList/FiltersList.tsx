import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { IFilters } from '@typings/state/index';
import { filterTypes, filterValues } from '@typings/filters';
import '@styles/FiltersList.css';

interface Props {
  filters: IFilters;
  setFilter: (name: filterTypes, value: filterValues) => void;
}

interface State {
  price: boolean;
  brand: boolean;
  color: boolean;
  os: boolean;
  internalMemory: boolean;
  ram: boolean;
  displaySize: boolean;
  displayResolution: boolean;
  camera: boolean;
  cpu: boolean;
}

class FiltersList extends React.Component<Props, State> {
  state = {
    price: false,
    brand: false,
    color: false,
    os: false,
    internalMemory: false,
    ram: false,
    displaySize: false,
    displayResolution: false,
    camera: false,
    cpu: false
  };

  filterData = {
    priceRange: {
      type: 'priceRange',
      title: 'Price',
      filters: [
        { label: '< $250', value: '<250' },
        { label: '$250 - $500', value: '250-500' },
        { label: '$500 - $750', value: '500-750' },
        { label: '$750', value: '750>' }
      ]
    },
    brand: {
      type: 'brand',
      title: 'Brand',
      filters: [
        { label: 'Samsung', value: 'samsung' },
        { label: 'Apple', value: 'apple' },
        { label: 'Huawei', value: 'huawei' },
        { label: 'LG', value: 'lg' },
        { label: 'HTC', value: 'htc' }
      ]
    },
    color: {
      type: 'color',
      title: 'Color',
      filters: [
        { label: 'Black', value: 'black' },
        { label: 'White', value: 'white' },
        { label: 'Grey', value: 'grey' }
      ]
    },
    os: {
      type: 'os',
      title: 'OS',
      filters: [
        { label: 'Android', value: 'android' },
        { label: 'iOS', value: 'ios' }
      ]
    },
    internalMemory: {
      type: 'internalMemory',
      title: 'Internal Memory',
      filters: [
        { label: '16GB', value: '16' },
        { label: '64GB', value: '64' },
        { label: '128GB', value: '128' },
        { label: '256GB', value: '256' }
      ]
    },
    ram: {
      type: 'ram',
      title: 'RAM',
      filters: [
        { label: '1GB', value: '1' },
        { label: '3GB', value: '3' },
        { label: '4GB', value: '4' },
        { label: '6GB', value: '6' }
      ]
    },
    displaySize: {
      type: 'displaySize',
      title: 'Display Size',
      filters: [
        { label: '4.5"', value: '4.5' },
        { label: '5.1"', value: '5.1' },
        { label: '5.5"', value: '5.5' },
        { label: '5.8"', value: '5.8' },
        { label: '6.0"', value: '6.0' },
        { label: '6.3"', value: '6.3' }
      ]
    },
    displayResolution: {
      type: 'displayResolution',
      title: 'Display Resolution',
      filters: [
        { label: '540x960', value: '540x960' },
        { label: '1080x1920', value: '1080x1920' },
        { label: '1125x2436', value: '1125x2436' },
        { label: '1440x2560', value: '1440x2560' },
        { label: '1440x2880', value: '1440x2880' },
        { label: '1440x2960', value: '1440x2960' }
      ]
    },
    camera: {
      type: 'camera',
      title: 'Camera',
      filters: [
        { label: '8Mpix', value: '8' },
        { label: '12Mpix', value: '12' },
        { label: '13Mpix', value: '13' },
        { label: '16Mpix', value: '16' }
      ]
    },
    cpu: {
      type: 'cpu',
      title: 'CPU',
      filters: [
        { label: 'Quad Core', value: 'quad_core' },
        { label: 'Hexa Core', value: 'hexa_core' },
        { label: 'Octa Core', value: 'octa_core' }
      ]
    }
  };

  handleCheck = (filterType: filterTypes, filterValue: filterValues) => {
    const { setFilter } = this.props;

    setFilter(filterType, filterValue);
  };

  handleCollapse = (target: filterTypes) => {
    this.setState((prevState: State) => ({
      ...prevState,
      [target]: !prevState[target]
    }));
  };

  renderListItems = (data: any) => {
    const { type, title, filters } = data;
    const { filters: { checked } } = this.props;

    return (
      <div>
        <ListItem button onClick={() => this.handleCollapse(type)}>
          <ListItemText primary={title} />
          {this.state[type] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state[type]} timeout="auto">
          <List>
            {filters.map(({ label, value }: any) => (
              <ListItem>
                <FormControlLabel
                  className="label"
                  control={<Checkbox checked={checked.includes(value)} onChange={() => this.handleCheck(type, value)} />}
                  label={label}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    );
  }

  render() {
    return (
      <div className="filtersList">
        <List
          component="nav"
          subheader={<ListSubheader component="div" disableSticky={true}>Filter by:</ListSubheader>}
        >
          {this.renderListItems(this.filterData.priceRange)}
          {this.renderListItems(this.filterData.brand)}
          {this.renderListItems(this.filterData.color)}
          {this.renderListItems(this.filterData.os)}
          {this.renderListItems(this.filterData.internalMemory)}
          {this.renderListItems(this.filterData.ram)}
          {this.renderListItems(this.filterData.displaySize)}
          {this.renderListItems(this.filterData.displayResolution)}
          {this.renderListItems(this.filterData.camera)}
          {this.renderListItems(this.filterData.cpu)}
        </List>
      </div>
    );
  }
}

export default FiltersList;
