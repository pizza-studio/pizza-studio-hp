import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://pizzastudio.org" target={"_white"}>
				Pizza Studio
			</a>
		</nav>
	);
}
