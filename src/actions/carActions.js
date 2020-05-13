export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (feature) => {
  console.log(feature)
  return {
    type: ADD_FEATURE,
    payload: {
      additionalPrice: feature,
      newFeature: feature
    }
  }
}

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (id) => {
  return {
    type: REMOVE_FEATURE,
    
  }
}