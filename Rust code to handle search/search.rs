#[no_mangle]
pub extern "C" fn find_text(query: &str, data: &[&str]) -> usize {
    data.iter().position(|&item| item == query).unwrap_or(usize::MAX)
}
