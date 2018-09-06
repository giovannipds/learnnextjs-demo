import Header from './Header'

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
}

const Layout = (props) => (
	<div style={layoutStyle}>
		<Heeader />
		{props.children}
	</div>
)

export default Layout