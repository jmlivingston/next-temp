import React, { useEffect, useState } from 'react';
import Tooltip from '../common/Tooltip';

const cols = new Array(10).fill();
const data = new Array(50)
  .fill()
  .map((_value, rowIndex) =>
    cols.reduce((acc, _value, colIndex) => ({ ...acc, [`col${colIndex}`]: `value${colIndex}${rowIndex}` }), {})
  );

const TableWithTooltip = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [tooltip, setTooltip] = useState();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const handleWindowClick = () => {
      if (isMobile) {
        setIsTooltipVisible(false);
      }
    };
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [isMobile]);

  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={() => setIsMobile(!isMobile)}>
        Simulate Mobile: {isMobile.toString()}
      </button>
      <table className="table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody
          onMouseEnter={() => !isMobile && setIsTooltipVisible(true)}
          onMouseMove={() => !isMobile && setIsTooltipVisible(true)}
          onMouseLeave={() => !isMobile && setIsTooltipVisible(false)}
          onScroll={() => setIsTooltipVisible(false)}
        >
          {data.map((datum, index) => (
            <tr key={index}>
              {Object.keys(datum).map((key) => (
                <td
                  className="cursor-pointer"
                  key={key}
                  onClick={(event) => {
                    if (isMobile) {
                      event.stopPropagation();
                      setTooltip(datum.col0);
                      setIsTooltipVisible(true);
                    }
                  }}
                  onFocus={() => !isMobile && setTooltip(datum.col0)}
                  onMouseOver={() => !isMobile && setTooltip(datum.col0)}
                >
                  {datum[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Tooltip isVisible={isTooltipVisible} text={tooltip} />
    </>
  );
};

export default TableWithTooltip;
