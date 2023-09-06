import {
  IntegrationExecutionContext,
  IntegrationValidationError,
  IntegrationInstanceConfigFieldMap,
  IntegrationInstanceConfig,
} from '@jupiterone/integration-sdk-core';
import { createAPIClient } from './client';

export const instanceConfigFields: IntegrationInstanceConfigFieldMap = {
  endpoint_central_endpoint: {
    type: 'string',
    mask: false,
  },
  zoho_account_endpoint: {
    type: 'string',
    mask: false,
  },
  zoho_client_id: {
    type: 'string',
    mask: false,
  },
  zoho_client_secret: {
    type: 'string',
    mask: true,
  },
  zoho_refresh_token: {
    type: 'string',
    mask: true,
  },
};

export interface IntegrationConfig extends IntegrationInstanceConfig {
  endpoint_central_endpoint: string;
  zoho_account_endpoint: string;
  zoho_client_id: string;
  zoho_client_secret: string;
  zoho_refresh_token: string;
}

export async function validateInvocation(
  context: IntegrationExecutionContext<IntegrationConfig>,
) {
  const { config } = context.instance;

  if (!config.endpoint_central_endpoint) {
    throw new IntegrationValidationError(
      'Config requires all of {endpoint_central_endpoint, zoho_account_endpoint}',
    );
  }

  const apiClient = createAPIClient(config);
  await apiClient.verifyAuthentication();
}
