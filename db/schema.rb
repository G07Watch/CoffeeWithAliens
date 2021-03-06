# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_11_210925) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coffee_schedules", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "coffee_time_id"
    t.index ["coffee_time_id"], name: "index_coffee_schedules_on_coffee_time_id"
    t.index ["user_id"], name: "index_coffee_schedules_on_user_id"
  end

  create_table "coffee_times", force: :cascade do |t|
    t.string "place"
    t.datetime "date"
    t.integer "start_time"
    t.integer "available_seats"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "host_id"
    t.bigint "star_system_id"
    t.index ["host_id"], name: "index_coffee_times_on_host_id"
    t.index ["star_system_id"], name: "index_coffee_times_on_star_system_id"
  end

  create_table "hosts", force: :cascade do |t|
    t.string "facebook"
    t.text "intro", null: false
    t.text "story", null: false
    t.text "topics", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_hosts_on_user_id"
  end

  create_table "star_systems", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "nickname", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "first_name"
    t.string "last_name"
    t.integer "phone_number"
    t.boolean "subscribed", default: false
    t.boolean "is_host", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "star_system_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["star_system_id"], name: "index_users_on_star_system_id"
  end

  create_table "wait_lists", force: :cascade do |t|
    t.integer "priority"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "coffee_schedule_id"
    t.index ["coffee_schedule_id"], name: "index_wait_lists_on_coffee_schedule_id"
  end

  add_foreign_key "coffee_schedules", "coffee_times"
  add_foreign_key "coffee_schedules", "users"
  add_foreign_key "coffee_times", "hosts"
  add_foreign_key "coffee_times", "star_systems"
  add_foreign_key "hosts", "users"
  add_foreign_key "users", "star_systems"
  add_foreign_key "wait_lists", "coffee_schedules"
end
