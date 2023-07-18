import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://pizzastudio.org">
				<p>Pizza Studio</p>
			</a>
		</nav>
	);
}
