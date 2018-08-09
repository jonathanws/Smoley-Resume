<template>
	<div class="footer" v-bind:class="color" v-bind:style="minHeight"></div>
</template>

<script>
export default {
	props: ['color', 'height'],
	data: function() {
		return {
			minHeight: {
				'min-height': this.height
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../variables';
.footer {
	margin-top: 50px;
}
</style>
