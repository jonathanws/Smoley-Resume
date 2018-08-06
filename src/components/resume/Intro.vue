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
				<button><font-awesome-icon icon="coffee" /></button>
				<button>two
				</button>
				<button>three
				</button>
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
			button {
				flex-grow: 1;
				background-color: $accent-color;
				border: 0;
				color: white;
				padding: 24px;
				outline: 0;
				&:hover {
					background-color: lighten($accent-color, 10%);
					cursor: pointer;
				}
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
