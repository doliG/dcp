const jobScheduler = require('./10_job_scheduler')

test('job has been called after 500ms', done => {
  const runnedAt = new Date()

  const timeout = 500;
  function job() {
    try {
      const calledAt = new Date()
      const interval = calledAt - runnedAt
      expect(interval).toBeGreaterThan(timeout)
      expect(interval).toBeLessThan(timeout + 50)
      done();
    } catch (error) {
      done(error)
    }
  }

  jobScheduler(job, timeout)
})