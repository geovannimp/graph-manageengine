import { executeStepWithDependencies } from '@jupiterone/integration-sdk-testing';
import { buildStepTestConfigForStep } from '../../../test/config';
import { Recording, setupProjectRecording } from '../../../test/recording';
import { Steps } from '../constants';

// See test/README.md for details
let recording: Recording;
afterEach(async () => {
  await recording.stop();
});

test(Steps.FETCH_PATCHES, async () => {
  recording = setupProjectRecording({
    directory: __dirname,
    name: Steps.FETCH_PATCHES,
  });

  const stepConfig = buildStepTestConfigForStep(Steps.FETCH_PATCHES);
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchStepMetadata(stepConfig);
});
