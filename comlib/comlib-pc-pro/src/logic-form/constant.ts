export enum SQLOperator {
	/** 等于 */
	EQUAL = '=',
	/** 不等于 */
	NOT_EQUAL = '<>',
	/** 匹配 */
	LIKE = 'LIKE',
	/** 不匹配 */
	NOT_LIKE = 'NOT LIKE',
	/** 包含 */
	IN = 'IN',
	/** 不包含 */
	NOT_IN = 'NOT IN',
	/** 大于等于 */
	GE = '>=',
	/** 小于等于 */
	LE = '<=',
	/** 大于 */
	G = '>',
	/** 小于 */
	L = '<',
	IS_NULL = 'IS NULL',
	IS_NOT_NULL = 'IS NOT NULL',
}

export enum SQLWhereJoiner {
	AND = 'AND',
	OR = 'OR',
}

/** 数据库字段类型 */
export enum FieldDBType {
	STRING = 'string',
	NUMBER = 'number',
	DATE = 'date',
}