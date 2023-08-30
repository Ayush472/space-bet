import React from 'react';
import './../../../../assets/css/Dashboard/game/snake and ladder/cell.css';

const Cell = ({ value, children }) => {
return (
<div className={`cell cell-${value}`}>
{children}
</div>
);
};

export default Cell;