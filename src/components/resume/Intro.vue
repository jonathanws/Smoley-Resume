<template>
	<div class="intro box-shadow">
		<div class="image">
			<!-- <img src="../../assets/temp-display-picture.png"> -->
		</div>
		<div class="intro-info">
			<div class="intro-details">
				<h2>Hi, I'm <span>Jon Smoley</span></h2>
				<h5>Software Engineer with <span>TS/SCI Clearance</span></h5>

				<hr/>

				<table>
					<tbody>
						<tr>
							<td>Age</td>
							<td>26</td> <!-- TODO -->
						</tr>
						<tr>
							<td>Address</td>
							<td><address>1234 Fake street, Baltimore, MD, 21230</address></td>
						</tr>
						<tr>
							<td>Email</td>
							<td>emailemailemail@gmail.com</td>
						</tr>
						<tr>
							<td>Phone</td>
							<td>301 123 4567</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="actions">
				<!-- Change to download -->
				<a href="https://docs.google.com/document/d/1MnfY7rHYEmYRqLu1E1YzOxC71NyGh7wc6wGypurm7X0/edit?usp=sharing" target="blank">
					<button>
						<font-awesome-icon :icon="['fab', 'google-drive']" size="lg"></font-awesome-icon>
					</button>
				</a>
				<a href="https://www.linkedin.com/in/jon-smoley-1bb0b731" target="blank">
					<button>
						<font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg"></font-awesome-icon>
					</button>
				</a>
				<a href="https://github.com/jonathanws" target="blank">
					<button>
						<font-awesome-icon :icon="['fab', 'github-alt']" size="lg"></font-awesome-icon>
					</button>
				</a>
				<a href="https://www.instagram.com/smoleypoleyoley/" target="blank">
					<button>
						<font-awesome-icon :icon="['fab', 'instagram']" size="lg"></font-awesome-icon>
					</button>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Intro'
}
</script>

<style lang="scss" scoped>

@import 'styles/constants';
@import '../../display-dimensions';

.intro {
	.image {
		background-color: black;
		min-height: 50px;
	}
	.intro-info {
		background-color: white;
		.intro-details {
			display: flex;
			flex-direction: column;
			padding: 20px 15px;
			color: #333;
			h2, h5 {
				font-weight: 100;
				margin: 0;
			}
			h2 span,
			h5 span {
				color: $accent-color;
				font-weight: 600;
			}
			hr {
				margin: 10px 30px;
				border-top: 1px solid #ddd;
				border-bottom: 0;
			}
			table {
				font-size: 12px;
			}
		}
		.actions {
			display: flex;
			background-color: $accent-color;
			>a,
			>button {
				$change: 360px;
				$num-buttons: 4;

				flex-grow: 1;
				height: $change / $num-buttons;
			}
			button {
				padding: 0;
				color: white;
				border: 0;
				outline: 0;
				background-color: $accent-color;
				&:hover {
					background-color: lighten($accent-color, 10%);
					cursor: pointer;
				}
			}
			>a button {
				width: 100%;
				height: 100%;
			}
		}
	}
}

@include for(phones-only) {
	h2 {
		margin: 0;
	}
}

@include for(phones-and-up) {
	.intro {
		display: flex;
		.image {
			flex-basis: 40%;
			background-color: black;
		}
		.intro-info {
			flex-basis: 60%;
			background-color: white;

			display: flex;
			flex-direction: column;
			.intro-details {
				flex-grow: 1;
			}
		}
	}
}

@include for(4k-and-up) {
	h2, h5 {
		font-size: 2em;
	}
}
</style>
