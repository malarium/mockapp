function randomString(length = 5) {
  let s = '';
  for (
    s;
    s.length < length;
    s +=
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(
        (Math.random() * 62) | 0,
      )
  );
  return s;
}
function randomNumber(length = 5) {
  let s = '';
  for (
    s;
    s.length < length;
    s += '0123456789'.charAt((Math.random() * 62) | 0)
  );
  return s;
}
// below are shortened versions of real Detox methods
function getByText(text) {
  return element(by.text(text));
}
function getById(id) {
  return element(by.id(id));
}
async function tapByText(text) {
  await getByText(text).tap();
}

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have welcome screen', async () => {
    await expect(getByText('LOGIN SCREEN')).toBeVisible();
    await expect(getByText('Sign up')).toBeVisible();
    await expect(getByText('Login')).toBeVisible();
  });
  it('should navigate to Login screen', async () => {
    await getByText('Login').tap();
    await expect(getByText('PROCEED')).toBeVisible();
  });
  it('Login page should work', async () => {
    await getById('login').typeText('user');
    await getById('password').typeText('pass');
    await getByText('PROCEED').tap();
  });
  it('should navigate to LoginSuccess page', async () => {
    await expect(getByText('Logging successful')).toBeVisible();
    await getById('logSuccess').swipe('up');
    await expect(getByText('RETURN')).toBeVisible();
    await getByText('RETURN').tap();
  });
  it('should navigate to Signup page', async () => {
    await getByText('Sign up').tap();
    await expect(getByText('FILL THE FORM:')).toBeVisible();
  });
  it("button REGISTER shouldn't be clickable until login and password are provided", async () => {
    await tapByText('REGISTER');
    await expect(getByText('FILL THE FORM:')).toBeVisible();
  });
  it('requires strings longer than 2 characters', async () => {
    await getById('newLogin').typeText(randomString());
    await getById('newPassword').typeText(randomString());
    await getById('newPasswordRepeated').typeText(randomString(2));
    await tapByText('REGISTER');
    await expect(getByText('FILL THE FORM:')).toBeVisible();
    await getById('newPassword').clearText();
    await getById('newPasswordRepeated').clearText();
  });
  it('requires both passwords to be identical', async () => {
    const newPass = randomString(7);
    await getById('newPassword').typeText(newPass);
    await getById('newPasswordRepeated').typeText(randomString());
    await tapByText('REGISTER');
    await expect(getById('warningOnFormFill')).toBeVisible();
    await getById('newPasswordRepeated').clearText();
    await getById('newPasswordRepeated').typeText(newPass);
    await tapByText('REGISTER');
    await expect(getByText('Logging successful')).toBeVisible();
    await getById('logSuccess').swipe('up');
    await expect(getByText('RETURN')).toBeVisible();
    await getByText('RETURN').tap();
  });
});
