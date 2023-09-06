import { IntegrationInvocationConfig } from '@jupiterone/integration-sdk-core';
import { StepTestConfig } from '@jupiterone/integration-sdk-testing';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { invocationConfig } from '../src';
import { IntegrationConfig } from '../src/config';

if (process.env.LOAD_ENV) {
  dotenv.config({
    path: path.join(__dirname, '../.env'),
  });
}

const DEFAULT_ENDPOINT_CENTRAL_ENDPOINT =
  'https://endpointcentral.manageengine.com';
const DEFAULT_ZOHO_CLIENT_ID = 'dummy-client-id';
const DEFAULT_ZOHO_CLIENT_SECRET = 'dummy-client-secret';
const DEFAULT_ZOHO_REFRESH_TOKEN = 'dummy-client-refresh-token';
const DEFAULT_ZOHO_ACCOUNT_ENDPOINT = 'https://accounts.zoho.com	';

export const integrationConfig: IntegrationConfig = {
  endpoint_central_endpoint:
    process.env.ENDPOINT_CENTRAL_ENDPOINT || DEFAULT_ENDPOINT_CENTRAL_ENDPOINT,
  zoho_account_endpoint:
    process.env.ZOHO_ACCOUNT_ENDPOINT || DEFAULT_ZOHO_ACCOUNT_ENDPOINT,
  zoho_client_id: process.env.ZOHO_CLIENT_ID || DEFAULT_ZOHO_CLIENT_ID,
  zoho_client_secret:
    process.env.ZOHO_CLIENT_SECRET || DEFAULT_ZOHO_CLIENT_SECRET,
  zoho_refresh_token:
    process.env.ZOHO_REFRESH_TOKEN || DEFAULT_ZOHO_REFRESH_TOKEN,
};

export function buildStepTestConfigForStep(stepId: string): StepTestConfig {
  return {
    stepId,
    instanceConfig: integrationConfig,
    invocationConfig: invocationConfig as IntegrationInvocationConfig,
  };
}
