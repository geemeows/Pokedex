import React from 'react'
import PropTypes from 'prop-types'
import { Statistic } from 'semantic-ui-react'

const Stat = ({ value, label, unit, color, long }) => {
	return (
		<Statistic className='static' color={color}>
			<Statistic.Value className={long ? 'long-text' : null}>
				{value}
			</Statistic.Value>
			<Statistic.Label>
				{label}
				{unit && <span className='unit'>({unit})</span>}
			</Statistic.Label>
		</Statistic>
	)
}
Stat.defaultProps = {
	unit: null,
	long: false
}

Stat.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	color: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	unit: PropTypes.string,
	long: PropTypes.bool
}

export default Stat
