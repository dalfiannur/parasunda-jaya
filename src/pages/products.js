import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import queryString from 'querystring'
import { makeStyles } from '@material-ui/styles'
import {
	CssBaseline,
	AppBar,
	Toolbar,
	Typography,
	Grid
} from '@material-ui/core'
import { products } from '../data'

const useStyle = makeStyles(theme => ({
	content: {
		paddingTop: 10
	}
}))

export default () => {
	const classes = useStyle()
	const globalWindow = window !== 'undefined' && window

	const [slug, setSlug] = useState('bakso-daging')
	const [product, setProduct] = useState(products[0])

	useEffect(() => {
		const url = _.replace(globalWindow.location.search, '?', '')
		const query = queryString.parse(url)
		setSlug(query.name ? query.name : 'bakso-daging')
	}, [globalWindow.location.search])

	useEffect(() => {
		const index = products.findIndex(item => item.slug === slug)
		setProduct(products[index])
	}, [slug])

	return (
		<React.Fragment>
			<CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Pasundan Jaya
          </Typography>
        </Toolbar>
      </AppBar>
			<main className={classes.content}>
				<Grid
					container
					spacing={3}
					direction='row'
					justify='center'
					alignItems='flex-start' >
					<Grid item md={4}>
						<img src={product.images[0].path} alt={product.images[0].name} />
					</Grid>
					<Grid item md={6}>
						{product.name}
					</Grid>
				</Grid>
			</main>
		</React.Fragment>
  )
}