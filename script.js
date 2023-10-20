import { pipeline } from '@xenova/transformers';

console.log('✅ Pipeline function is correctly loaded: \n', pipeline);

console.log('❌ But attempting to create a pipeline fails: ');

// Allocate a pipeline for sentiment-analysis
(async function () {
  let pipe = await pipeline('sentiment-analysis');
})();
