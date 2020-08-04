import React from 'react'
import styled from 'styled-components'
import { Grid, Placeholder, Divider } from 'semantic-ui-react'

export const Spacer = styled.div`
	margin: ${({ vertical, horizontal }) => `${vertical}px ${horizontal}px`};
`

const LoaderSkeleton = () => (
	<>
		<Grid stackable container padded columns={2}>
			<Grid.Row stretched>
				<Grid.Column width={6}>
					<Placeholder />
				</Grid.Column>
				<Grid.Column width={10}>
					<Placeholder fluid>
						<Placeholder.Line length='medium' />
						<Placeholder.Line length='short' />
					</Placeholder>
					<Spacer vertical={25} horizontal={0} />
					<Placeholder fluid>
						<Placeholder.Line length='very long' />
						<Placeholder.Line length='very long' />
						<Placeholder.Line length='very long' />
						<Placeholder.Line length='very long' />
						<Placeholder.Line length='very long' />
						<Placeholder.Line length='very long' />
					</Placeholder>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		<Divider horizontal>Description</Divider>
		<Placeholder fluid>
			<Placeholder.Line length='full' />
			<Placeholder.Line length='full' />
			<Placeholder.Line length='full' />
			<Placeholder.Line length='full' />
			<Placeholder.Line length='full' />
			<Placeholder.Line length='full' />
		</Placeholder>
		<Divider horizontal>Profile</Divider>
		<Placeholder fluid>
			<Placeholder.Line length='full' />
			<Placeholder.Line length='full' />
			<Placeholder.Line length='full' />
			<Placeholder.Line length='full' />
			<Placeholder.Line length='full' />
			<Placeholder.Line length='full' />
		</Placeholder>
	</>
)
export default LoaderSkeleton
