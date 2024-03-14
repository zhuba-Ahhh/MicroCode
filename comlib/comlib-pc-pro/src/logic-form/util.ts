/** 获取判断字段查询的条件符号 */
import {FieldDBType} from "./constant";

export const getFieldConditionAry = (dbType: string): Array<{ label: string; value: string; notNeedValue?: boolean }> => {
	switch (dbType) {
		case FieldDBType.STRING: {
			return [
				{ label: '等于(=)', value: '=' },
				{ label: '不等于(<>)', value: '<>' },
				{ label: '匹配(LIKE)', value: 'LIKE' },
				{ label: '不匹配(NOT LIKE)', value: 'NOT LIKE' },
				{ label: '包含(IN)', value: 'IN' },
				{ label: '不包含(NOT IN)', value: 'NOT IN' },
				{ label: '等于 NULL', value: 'IS NULL', notNeedValue: true },
				{ label: '不等于 NULL', value: 'IS NOT NULL', notNeedValue: true },
			];
		}
		case FieldDBType.NUMBER: {
			return [
				{ label: '等于(=)', value: '=' },
				{ label: '不等于(<>)', value: '<>' },
				{ label: '大于(>)', value: '>' },
				{ label: '小于(<)', value: '<' },
				{ label: '大于等于(>=)', value: '>=' },
				{ label: '小于等于(<=)', value: '<=' },
				{ label: '包含(IN)', value: 'IN' },
				{ label: '不包含(NOT IN)', value: 'NOT IN' },
				{ label: '等于 NULL', value: 'IS NULL', notNeedValue: true },
				{ label: '不等于 NULL', value: 'IS NOT NULL', notNeedValue: true },
			];
		}
		case FieldDBType.DATE: {
			return [
				{ label: '等于(=)', value: '=' },
				{ label: '不等于(<>)', value: '<>' },
				{ label: '大于(>)', value: '>' },
				{ label: '小于(<)', value: '<' },
				{ label: '大于等于(>=)', value: '>=' },
				{ label: '小于等于(<=)', value: '<=' },
				{ label: '等于 NULL', value: 'IS NULL', notNeedValue: true },
				{ label: '不等于 NULL', value: 'IS NOT NULL', notNeedValue: true },
			];
		}
		default: return [];
	}
};