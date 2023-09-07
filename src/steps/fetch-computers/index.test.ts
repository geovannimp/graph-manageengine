import { executeStepWithDependencies } from '@jupiterone/integration-sdk-testing';
import { buildStepTestConfigForStep } from '../../../test/config';
import { Recording, setupProjectRecording } from '../../../test/recording';
import { Steps } from '../constants';

// See test/README.md for details
let recording: Recording;
afterEach(async () => {
  await recording.stop();
});

test(Steps.FETCH_COMPUTERS, async () => {
  recording = setupProjectRecording({
    directory: __dirname,
    name: Steps.FETCH_COMPUTERS,
  });

  const stepConfig = buildStepTestConfigForStep(Steps.FETCH_COMPUTERS);
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchStepMetadata(stepConfig);
});
