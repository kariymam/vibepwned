module.exports = {
	drafts: (collectionApi) => {
		return collectionApi.getFilteredByTags("drafts");
	}
}