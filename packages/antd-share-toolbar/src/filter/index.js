// @flow
import * as React from 'react';
import SelectFilter from './select';
import NumberFilter from './number';
import TextFilter from './text';
import styled from 'styled-components';
import {Icon} from 'antd';
import debounce from 'lodash/debounce';
import DateFilter from './date';
import isEmpty from 'lodash/isEmpty';
// import {FormattedMessage} from 'react-intl';
// import defaultMessage from '../locale';


type Props = {
  changeFilter: Object => void,
  deleteFilter: number => void,
  displayedFilters: Array<number>,
  filters: Array<{
    field?: string,
    type: string,
    placeholder: string,
    options?: Array<{
      text: string,
      condition: Object,
    }>,
    label: string
  }>,
  where: Object
}

type State = {
  condition: Object
}

const FilterWrapper = styled.div`
  transition: 200ms;
  maxWidth: 220px;
  position: relative;
  display: inline-block;
  text-align: left;
  margin: 8px 16px;

  &:hover {
    opacity: .8;
  }

  i.filter-cross {
    transition: all 200ms;
    left: 8px;
    position: relative;
    font-size: 18px;
    cursor: pointer;
  }

  h5 {
    margin-bottom: 0;
  }
`

export default class FilterGroup extends React.Component<Props, State> {
  onChange = (cond: Object) => {
    let {where, changeFilter} = this.props;
    if (isEmpty(cond)) {
      changeFilter({});
    } else {
      Object.keys(cond).forEach(key => {
        const newCond = cond[key];
        if (newCond === undefined) {
          delete where[key];
        } else {
          where[key] = newCond
        }
      });
      changeFilter(where);
    }
  }

  deleteFilter = (index: number) => {
    const {deleteFilter, filters} = this.props;
    const filter = filters[index];
    if (filter.type === 'select') {
      const allField = filter.options.reduce((result: Object, option: Object) => {
        Object.keys(option.condition).forEach(key => {
          if (!(key in result)) {
            result[key] = undefined;
          }
        });
        return result;
      }, {});
      this.onChange(allField);
    } else {
      this.onChange({[filter.field.split('.')[0]]: undefined});
    }
    deleteFilter(index);
  }

  render() {
    const {filters = [], displayedFilters, where} = this.props;
    if (!filters || !filters.length) {
      return null;
    }
    const debounceChange = debounce(this.onChange, 500);
    const renderFilter = (filter) => {
      switch (filter.type) {
        case 'select':
          return <SelectFilter onChange={debounceChange} where={where} {...filter} />;
        case 'number':
          return <NumberFilter onChange={debounceChange} name={filter.field} where={where} placeholder={filter.placeholder}/>;
          case 'date':
          return <DateFilter onChange={debounceChange} name={filter.field} where={where} />;
        case 'text':
          return <TextFilter onChange={debounceChange} name={filter.field} where={where} placeholder={filter.placeholder}/>;
        default:
          return null;
      }
    }
    return (
      <div>
        {
          displayedFilters.map(index => (
            <FilterWrapper key={index}>
              <h5>{filters[index].label}</h5>
              {renderFilter(filters[index])}
              {
                !filters[index].alwaysDisplay && (
                  <Icon className="filter-cross" type="close-circle" onClick={() => this.deleteFilter(index)} />
                )
              }
            </FilterWrapper>
            
          ))
        }
      </div>
    );
  }
}