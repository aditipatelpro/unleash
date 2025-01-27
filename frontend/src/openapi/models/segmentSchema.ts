/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ConstraintSchema } from './constraintSchema';

/**
 * Represents a segment of users defined by a set of constraints.
 */
export interface SegmentSchema {
    /** The segment's id. */
    id: number;
    /** The name of the segment. */
    name?: string;
    /** List of constraints that determine which users are part of the segment */
    constraints: ConstraintSchema[];
    /** The description of the segment. */
    description?: string | null;
    /** The time the segment was created as a RFC 3339-conformant timestamp. */
    createdAt?: string;
    /** Which user created this segment */
    createdBy?: string;
    /** The project the segment relates to, if applicable. */
    project?: string | null;
}
