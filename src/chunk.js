var patchcords = [
	{
		"modelName": "Generic Optical <-> Generic Optical",
		"manufacturerName": "Generic",
		"mediums": [
			{
				"mediumNumber": 1,
				"startTermination": {
					"terminationId": 251828656,
					"terminationLevel": "TerminationPoint"
				},
				"endTermination": {
					"terminationId": 251828709,
					"terminationLevel": "TerminationPoint"
				}
			}
		]
	},
	{
		"modelName": "Generic Optical <-> Generic Optical",
		"manufacturerName": "Generic",
		"mediums": [
			{
				"mediumNumber": 1,
				"startTermination": {
					"terminationId": 251828653,
					"terminationLevel": "TerminationPoint"
				},
				"endTermination": {
					"terminationId": 251828659,
					"terminationLevel": "TerminationPoint"
				}
			}
		]
	},
	{
		"modelName": "Generic Optical <-> Generic Optical",
		"manufacturerName": "Generic",
		"mediums": [
			{
				"mediumNumber": 1,
				"startTermination": {
					"terminationId": 251828675,
					"terminationLevel": "TerminationPoint"
				},
				"endTermination": {
					"terminationId": 251828693,
					"terminationLevel": "TerminationPoint"
				}
			}
		]
	},
	{
		"modelName": "Generic Optical <-> Generic Optical",
		"manufacturerName": "Generic",
		"mediums": [
			{
				"mediumNumber": 1,
				"startTermination": {
					"terminationId": 251828670,
					"terminationLevel": "TerminationPoint"
				},
				"endTermination": {
					"terminationId": 251828655,
					"terminationLevel": "TerminationPoint"
				}
			}
		]
	},
	{
		"modelName": "Generic Optical <-> Generic Optical",
		"manufacturerName": "Generic",
		"mediums": [
			{
				"mediumNumber": 1,
				"startTermination": {
					"terminationId": 251828667,
					"terminationLevel": "TerminationPoint"
				},
				"endTermination": {
					"terminationId": 251828702,
					"terminationLevel": "TerminationPoint"
				}
			}
		]
	},
	{
		"modelName": "Generic Optical <-> Generic Optical",
		"manufacturerName": "Generic",
		"mediums": [
			{
				"mediumNumber": 1,
				"startTermination": {
					"terminationId": 251828663,
					"terminationLevel": "TerminationPoint"
				},
				"endTermination": {
					"terminationId": 251828674,
					"terminationLevel": "TerminationPoint"
				}
			}
		]
	},
	{
		"modelName": "Generic Optical <-> Generic Optical",
		"manufacturerName": "Generic",
		"mediums": [
			{
				"mediumNumber": 1,
				"startTermination": {
					"terminationId": 251828660,
					"terminationLevel": "TerminationPoint"
				},
				"endTermination": {
					"terminationId": 251828668,
					"terminationLevel": "TerminationPoint"
				}
			}
		]
	},
	{
		"modelName": "Generic Optical <-> Generic Optical",
		"manufacturerName": "Generic",
		"mediums": [
			{
				"mediumNumber": 1,
				"startTermination": {
					"terminationId": 251828691,
					"terminationLevel": "TerminationPoint"
				},
				"endTermination": {
					"terminationId": 251828664,
					"terminationLevel": "TerminationPoint"
				}
			}
		]
	},
	{
		"modelName": "Generic Optical <-> Generic Optical",
		"manufacturerName": "Generic",
		"mediums": [
			{
				"mediumNumber": 1,
				"startTermination": {
					"terminationId": 251828687,
					"terminationLevel": "TerminationPoint"
				},
				"endTermination": {
					"terminationId": 251828686,
					"terminationLevel": "TerminationPoint"
				}
			}
		]
	},
	{
		"modelName": "Generic Optical <-> Generic Optical",
		"manufacturerName": "Generic",
		"mediums": [
			{
				"mediumNumber": 1,
				"startTermination": {
					"terminationId": 251828680,
					"terminationLevel": "TerminationPoint"
				},
				"endTermination": {
					"terminationId": 251828681,
					"terminationLevel": "TerminationPoint"
				}
			}
		]
	}
];
var patchcordChunkSize = 3;
var chankedPatchcordsInputs = [];
var chankedPatchcordsInputs2 = [];
for (var i = 0; i < patchcords.length; i += patchcordChunkSize) {
  var chunk = [];
  for (var j = 0; j < patchcordChunkSize; j++) {
    var index = i + j;
    if (index < patchcords.length) {
      chunk.push(patchcords[index]);
    }
  }
  chankedPatchcordsInputs.push(chunk);
}
console.log(chankedPatchcordsInputs.length);
console.log(chankedPatchcordsInputs);

// Array.from({length: Math.ceil(patchcords.length / patchcordChunkSize)}, (val, i) => {
//     chankedPatchcordsInputs2.push(patchcords.slice(i * patchcordChunkSize, i * patchcordChunkSize + patchcordChunkSize))
//   })

//   console.log(chankedPatchcordsInputs2);
