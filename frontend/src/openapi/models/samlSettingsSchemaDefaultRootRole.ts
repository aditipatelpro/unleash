/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Assign this root role to auto created users
 */
export type SamlSettingsSchemaDefaultRootRole =
    typeof SamlSettingsSchemaDefaultRootRole[keyof typeof SamlSettingsSchemaDefaultRootRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SamlSettingsSchemaDefaultRootRole = {
    Viewer: 'Viewer',
    Editor: 'Editor',
    Admin: 'Admin',
} as const;
