import test from "tape"
import { forRules } from "./PasswordValidator"

test("PasswordValidator rule checker", (t) => {
	const rules = [
		{ message: "needs to start with upper case", regex: /^[A-Z]/ },
		{ message: "needs a bob prefix", regex: /bob/gi },
		{ message: "needs an @ symbol", regex: /@/g }
	]
	const testStr = forRules(rules)
	t.equals(testStr("Barkley-bob@"), true, "should pass both rules")
	t.equals(testStr("Barkley-bob@"), true, "no side effects")
	t.equals(testStr("helloman"), false, "should not pass any rule")
	t.equals(testStr("1234"), false, "should not pass any rule")
	t.end()
})