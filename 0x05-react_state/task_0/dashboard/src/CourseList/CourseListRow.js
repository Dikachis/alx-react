import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite'

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerStyle = {backgroundColor: '#deb5b545'};
  const rowStyle = {backgroundColor: '#f5f5f5ab'};
  const selected_style = isHeader ? headerStyle : rowStyle;

  return (
    <tr style={selected_style}>
      {isHeader ?
        textSecondCell === null ?
          <th colSpan="2" className={css(rowStyle.thcenter)} >{textFirstCell}</th>
        :
          <>
            <th className={css(rowStyle.th)} >{textFirstCell}</th>
            <th className={css(rowStyle.th)} >{textSecondCell}</th>
          </>
      :
        <>
          <td className={css(rowStyle.td)} >{textFirstCell}</td>
          <td className={css(rowStyle.td)} >{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

const rowsStyles = StyleSheet.create({
  thcenter: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'center'
  },
  th: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'left'
  },
  td: {
    paddingLeft: 3
  }
});

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow;