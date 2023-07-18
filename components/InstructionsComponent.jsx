import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	var lang = window.navigator.language || window.navigator.userLanguage;
	lang = lang.substr(0, 2);
	var studioIntro = "Developers of Pizza Helpers & More Great Apps";
	var ophelperName = "Pizza Helper for Genshin";
	var hsrhelperName = "Pizza Helper for HSR";
	var hertaTerminalName = "Herta Terminal";
	switch (lang) {
		case "zh":
			studioIntro = "为披萨玩家开发更多更好的App";
			ophelperName = "原神披萨小助手";
			hsrhelperName = "星铁披萨小助手";
			hertaTerminalName = "黑塔终端";
			break;
		case "ja":
			studioIntro = "ピザ助手アプリの開発者たち";
			ophelperName = "原神ピザ助手";
			hsrhelperName = "崩スタピザ助手";
			hertaTerminalName = "ヘルタ端末";
			break;
	}

	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Pizza <span>Studio</span>
				</h1>
				<p>
					( {studioIntro})
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://gi.pizzastudio.org"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>({ophelperName})</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://hsr.pizzastudio.org"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>({hsrhelperName})</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://herta.pizzastudio.org"}
				>
					<div className={styles.button}>
						{/* <img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/> */}
						<p>({hertaTerminalName})</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				{/* <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
						alt="Alchemy Supercharged"
					/>
				</a> */}
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/pizza-studio"
							target={"_blank"}
						>
							Follow us on Github
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/@Haku_Bill"
							target={"_blank"}
						>
							Follow us on Twitter
						</a>
					</div>
				</div>
				Copyright © 2022-2023 Pizza Studio
			</div>
		</div>
	);
}
