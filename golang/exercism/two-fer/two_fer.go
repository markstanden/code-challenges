package twofer

// ShareWith returns a message string with the provided argument added
// One for <name>, one for me.
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}
	return "One for " + name + ", one for me."
}
