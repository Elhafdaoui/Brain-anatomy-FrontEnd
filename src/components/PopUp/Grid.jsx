import * as React from 'react';
import './grid.css'


export function Grid({ rows, checkedFns, setCheckedFns }) {

  const handleCheckFunction = (e) => {
    const isChecked = e.target.checked
    const value = Number(e.target.value)

    if (isChecked && !checkedFns.includes(value)) {
      setCheckedFns(checkedFns.concat(value))
    }
    if (!isChecked && checkedFns.includes(value)) {
      setCheckedFns(checkedFns.filter((element) => (element !== value)))
    }
  }

  React.useEffect(() => {
    console.log(checkedFns)
  }, [checkedFns])
  return (
    <table id="functions" className='functions'>
      <tr>
        <th width="1rem" style={{ textAlign: 'center' }} >Action</th>
        <th style={{ textAlign: 'center' }} >Cognitive Function</th>
      </tr>
      {rows.map(element => (
        <tr>
          <td style={{ textAlign: 'center' }}  >
            <input type="checkbox" value={element.id} onChange={handleCheckFunction} />
          </td>
          <td >{element.function}</td>
        </tr>
      ))}
    </table>
  );
}
