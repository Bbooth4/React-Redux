export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

export function timersFormattedForDropdown(timers) {
  return timers.map(timer => {
    return {
      value: timer.id,
      text: `${timer.title} ${timer.name} ${timer.length}`
    };
  });
}
