/**
 *
 * PluginIcon
 *
 */

import React from 'react';
import {Box} from '@strapi/design-system';

const PluginIcon = () => (
  <Box padding="0.175rem" paddingBottom="0.35rem" background="alternative100" borderColor="alternative200" hasRadius={true} color="alternative700" height="100%" >
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tabler" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 9l3 3l-3 3"></path>
      <path d="M13 15l3 0"></path>
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
    </svg>
  </Box >
);

export default PluginIcon;
